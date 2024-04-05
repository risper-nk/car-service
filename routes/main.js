const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('../config/default.json')
const auth = require('../middlewares/admin')
const Product = require('../models/Product')
const Book = require('../models/Booking')
const Vehicle = require('../models/Vehicle')
const Payment = require('../models/Payment')
const Notification = require('../models/Notification')
const Company = require('../models/Company')

const Mail = require('../models/Mail')

const Invoice = require('../models/Invoice')
const Withdraw = require('../models/Withdraw')
const Profile = require('../models/Profile')
const Handler = require("../models/Handler")
const Active = require('../models/Active')
const Category = require("../models/Category")
const Service = require("../models/Service")
//const upload = multer({ dest: 'files/assets/global/images/uploads/' });
const {formidable} = require('formidable');

//@route GET api/models/admin
//@access Private

router.get('/',  async (req, res) => {
	try {
	  const requests = {}
	  return res.status(200).json(requests)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getCustomers',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const invoice = await Invoice.find({company:company_id})
	  result.customers = {data:[],total:0}
	  for(var inv of invoice){
		const r = {}
		const user = await User.findById(inv.user)
		r.user = user
		r.invoice = inv
		result.customers.data.push(r)
		result.customers.total += 1
	  }
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getOrder/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const order_id = req.params.id
	  var invoice = await Invoice.findById(order_id)
	  if(!invoice){
			invoice = await Book.findById(order_id)
			if(invoice){
				invoice = invoice.invoice
			}else{
				return res.status(404).json({message:"Order not found"})
			}
	  }
	  const book = await Book.findById(invoice.booking)
	  const user = await User.findById(invoice.user).select("-password")
	  let categories = []
	  if(book){
		for(var category of book.service_category){
			if(category === ""){continue}
			const catg = await Category.findById(category)
			if(catg){categories.push(catg)}
		}
	  }
	  result.book = book ? book : {}
	  result.user = user ? user : {}
	  result.invoice = invoice
	  result.categories = categories
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getOrders',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const invoice = await Invoice.find({company:company_id})
	  result.orders = {data:[],total:0}
	  for(var inv of invoice){
		const r = {}
		const user = await User.findById(inv.user)
		const book = await Book.findById(inv.booking)
		if(!book){continue}
		r.user = user
		r.invoice = inv
		r.book = book
		result.orders.data.push(r)
		result.orders.total += 1
	  }
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})


router.post('/removeAssignment/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	 const book_id = req.params.id
	 const handler_id = req.body
		
		const book = await Book.findById(book_id)
		if(!book){
			return res.status(404).json({message:"Booking not found"})
		}
		result.booking = book
		await Book.findByIdAndUpdate(
			book_id,
			{$unset:{handler:handler_id}},
			{new:true}
		)
		await Handler.findByIdAndUpdate(
			handler_id,
			{$unset:{booking:book_id}},
			{new:true}
		)
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})


router.post('/assignWorker/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	 const book_id = req.params.id
	 const {handler_id,tracking_number} = req.body
		
		const book = await Book.findById(book_id)
		if(!book){
			return res.status(404).json({message:"Booking not found"})
		}
		result.booking = book
		const active = new Active()
		active.company = company_id
		active.handler = handler_id
		active.user = book.user
		active.booking = book._id
		active.tracking_number = tracking_number
		await active.save()
		
		await Book.findByIdAndUpdate(
			book_id,
			{$set:{handler:handler_id,active:active._id}},
			{new:true}
		)
		result.active = active
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/deleteWorker/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const worker_id = req.params.id
	  const worker = await Handler.findById(worker_id)
	  if(worker.company.toString() !== company_id){
		return res.status(401).json({message:"Anaouthorised Request"})
	  }
	  await Handler.findByIdAndDelete(worker_id)
	  result.message = "Worker Deleted"
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/newWorker',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const data = req.body
	  console.log(data)
	  if(!data.name || !data.password || !data.email){
			return res.status(400).json({message:"Missing Data"})
	  }
	  if(data.update === true && data.id){
		  var fields = {}
		  fields.name = data.name
		  fields.email = data.email
		  fields.status = data.status
		  if (data.password){
			const salt = await bcrypt.genSalt(10)
			fields.password = await bcrypt.hash(data.password, salt)
		  }
		  await Handler.findByIdAndUpdate(
			data.id,
			{$set:fields},
				{new:true}
		  )
		  return res.status(200).json({message:"Worker updated successfully"})
	  }
	  const worker = new Handler(data)
	  if (data.password){
		const salt = await bcrypt.genSalt(10)
		worker.password = await bcrypt.hash(data.password, salt)
	  }
	  worker.company = company_id
	  await worker.save()
	  result.worker = worker
	  result.message="New worker created"
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getWorker/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const workers = await Handler.findById(req.params.id).select("-password")
	  result.worker = workers
	  const active = await Active.find({handler:workers._id})
	  result.active = []
	  for(var a of active){
		const book = await Book.findById(a.booking)
		result.active.push({active: a,book:book})
	  }
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getWorkers',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const workers = await Handler.find({company:company_id}).select("-password")
	  result.workers = []
	  for(var wk of workers){
		result.workers.push(wk)
	  }
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/recentOrders',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  var date = new Date()
	  date = date.getTime()
	  
	  const bookings = await Book.find({company:company_id})
	  result.bookings = []
	  
	  for(var book of bookings){
		var bdt = new Date(book.date)
		bdt = bdt.getTime()
		const difference_ms = Math.abs(date - bdt);
		const r = {}
		//console.log("date differnce",Math.floor(difference_ms / (1000 * 60 * 60 * 24)))
		if(difference_ms){
			const user = await User.findById(book.user)
			const invoice = await Invoice.findById(book.invoice)
			const service = await Service.findById(book.service)
			r.user = user
			r.book= book
			r.invoice = invoice
			r.service = service ? service : {name: ""}
			result.bookings.push(r)
		}
	  }
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})


router.post('/bestSellers', auth, async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const books = await Book.find({company:company_id})
	  var categories = []
	  for(var book of books){
		 for(var i of book.service_category){
			if(i == ""){
				continue
			}
			categories.push(i)
		 }
	  }
	  if(categories.length === 0){
		var categs = await Category.find({company:company_id})
		for(var c of categs){
			categories.push(c._id)
		}
	  }
	  var data = {}
	  var category_data = []
	  for(var category of categories){
		if(!data[category]){
			const ctg = await Category.findById(category)
			category_data.push(ctg)
			data[category] = 1
		}else{
			data[category] += 1
		}
	  }
	  result.data = data
	  result.categories	= category_data
	  result.message = "Success"
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getAnalysis',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const company = await Company.findById(company_id)
	  const invoice = await Invoice.find({company:company_id})
	  const bookings = await Book.find({company:company_id})
	  const services = await Service.find({company:company_id})
	  const handler = await Handler.find({company:company_id}) 
	  const category = await Category.find({company:company_id}) 
	  result.invoice = {data:[],total:0,complete:0,cancelled:0}
	  for(var inv of invoice){
		const r = {}
		const user = await User.findById(inv.user)
		r.invoice = inv
		r.user = user
		if(inv.complete === true){
			result.invoice.complete += inv.amount
		}
		if(inv.cancelled == true){
			result.invoice.cancelled+=1
		}
		result.invoice.total += inv.amount
		result.invoice.data.push(r)
	  }
	  result.services = services
	  result.handlers = handler
	  result.category = category
	  result.bookings = bookings
	  
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})


router.post('/newService',auth,  async (req, res) => {
	try {
	  const result = {}
	  const data = req.body
	  console.log(data.categories)
	  if(!data.id){
		const service = new Service(data)
		service.company = req.user.company
		await service.save()
		result.message = "New Service created"
	  }else{
		if(data.update === true){
			await Service.findByIdAndUpdate(
				data.id,
				{ $set:data },
				{ new: true },  
			)
			result.message = "Service Updated"
		}
		
	  }
	 
	  
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/newCategory',auth,  async (req, res) => {
	try {
	  const result = {}
	  result.message = "success"
	  const data = req.body
	  if(data._id && data.update === true){
		await Category.findByIdAndUpdate(
			data._id,
			{$set:data},
			{new:true},
		)
		return res.status(200).json(result)
	  }
	  const category = new Category(data)
	  category.company = req.user.company
	  await category.save()
	  result.data = category
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getCategories',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const categories = await Category.find({company:company_id})
	  result.message = "success"
	  result.categories = categories
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getCategory/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const category_id = req.params.id
	  const category = await Category.findById(category_id)
	  if(!category){
		result.message = "Category not found"
		return res.status(404).json(result)
	  }
	  if(category.company.toString() !== company_id){
		result.message = "Anauthorised request"
		return res.status(404).json(result)
	  }
	  result.category = category
	  
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})


router.post('/deleteCategory/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const category_id = req.params.id
	  const category = await Category.findById(category_id)
	  if(!category){
		result.message = "Category not found"
		return res.status(404).json(result)
	  }
	  if(category.company.toString() !== company_id){
		result.message = "Anauthorised request"
		return res.status(404).json(result)
	  }
	  await Category.findByIdAndDelete({_id:category_id})
	  result.message = "Category deleted successfully"
	  
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})



router.post('/uploadImage',auth,  async (req, res) => {
	try {
	  //upload.single("file"),
	  const result = {};
	  result.message = "incomplete"
	  const form = formidable({ multiples: true });
		form.parse(req, (err, fields, files) => {
			console.log('fields: ', fields);
			console.log('files: ', files);
			result.message = "Successfully uploaded"
			result.success = true
			return res.status(200).json(result)
		});
	  
	  
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getServices', auth, async (req, res) => {
	try {
	  const company_id = req.user.company
	  const result = {}
	  const services = await Service.find({company:company_id})
	  result.services = services
		
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error='+error.message)
	}
  })

  router.post('/getService/:id', auth, async (req, res) => {
	try {
	  const company_id = req.user.company
	  const service_id = req.params.id
	  const result = {}
	  const services = await Service.findById(service_id)
	  if(services.company.toString() !== company_id){
		return res.status(401).json({message:"Anaouthorised Request"})
	  }
	  result.service = services
		
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error='+error.message)
	}
  })



module.exports = router