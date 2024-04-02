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

router.post('/bestSellers', auth, async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const books = await Book.find({company:company_id})
	  var categories = []
	  for(var book of books){
		 for(var i of book.service_category){
			
			categories.push(i)
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
	  if(!data.id){
		const service = new Service(data)
		service.company = req.user.company
		await service.save()
		result.message = "New Service created"
	  }else{
		await Service.findByIdAndUpdate(
			data.id,
			{ $set:data },
			{ new: true },  
		)
		result.message = "Service Updated"
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