const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('../config/default.json')
const auth = require('../middlewares/auth')
const Book = require("../models/Booking")
const Company = require("../models/Company")
const Service = require("../models/Service")
const Profile = require('../models/Profile')
const Category = require("../models/Category")
const Invoice = require("../models/Invoice")
const Handler = require ("../models/Handler")
const Checkout = require("../models/Checkout")

router.post('/checkout/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const data = req.body
	  const invoice_id = req.params.id
	  const invoice = await Invoice.findById(invoice_id)
	  if(!invoice){
		return res.status(404).json({message: "Invoice not found"})
	  }
	  const checkout = new Checkout()
	  checkout.description = data
	  checkout.user = req.user.id
	  checkout.invoice = invoice_id
	  checkout.amount = invoice.amount
	  await checkout.save()
	  await Invoice.findByIdAndUpdate(
		invoice._id,
		{$set:{complete:true,due:new Date()}},
		{new:true}
	  )
	  result.checkout = checkout
	  result.message = "Checkout Successfull"
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})



router.post('/book/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const data = req.body
	  const service_id = req.params.id
	  const service = await Service.findById(service_id)
	  if(!service){
		result.message = "Service not available"
		return res.status(404).json(result)
	  }
	  const booked = await Book.findOne({service:service_id,user:req.user.id})
	  if(booked){
		return res.status(400).json({message:"Service Already Booked"})
	  }
	  const company = await Company.findById(service.company)
	  var price = 0
		for(var category_id of data.service_category){
			if(category_id == ""){
				continue
			}
			const category = await Category.findById(category_id)
			price += category.price ? category.price : 0
		}
	  const invoice = new Invoice() 
	  const book = new Book(data)
	  book.invoice = invoice._id
	  invoice.booking = book._id
	  invoice.company = company._id
	  invoice.amount = price
	  invoice.user = req.user.id
	  book.user = req.user.id
	  book.company = company._id
	  book.service = service_id
	  book.description = service
	  await book.save()
	  await invoice.save()
	  result.message = "Booking complete"
	  result.book = book
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getInvoice/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const data = req.body
	  const book_id = req.params.id
	  const invoice = await Invoice.findById(book_id)
	  if(!invoice){
		result.message = "Invoice not available"
		return res.status(404).json(result)
	  }
	  const book = await Book.findById(invoice.booking)
	  if(!book){
		result.message = "No Booking found"
		return res.status(404).jons(result)
	  }
	  if(invoice.user.toString() !== req.user.id){
		result.message = "Anaouthorised access"
		return res.status(401).jons(result)
	  }
	  const service = await Service.findById(book.service)
	  result.service= service ? service : {name:"Not Available",discount:0}
	  result.book = book
	
	
	  result.categories = []
	  if(!invoice.amount || invoice.amount === "" || invoice.amount === 0){
		var price = 0

		for(var cat of book.service_category){
			if(cat === ""){continue}
			var category = await Category.findById(cat)
			if(category){
				price += category.price
				result.categories.push(category)
			}
		}
		invoice.amount = price
	  }
	  result.invoice = invoice
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})

router.post('/getBook/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const data = req.body
	  const book_id = req.params.id
	  const book = await Book.findById(book_id)
	  if(!book){
		result.message = "Book not available"
		return res.status(404).json(result)
	  }
	  if(book.user.toString() !== req.user.id){
		result.message = "Anaouthorised access"
		return res.status(401).jons(result)
	  }
	  const service = await Service.findById(book.service)
	  result.service= service ? service : {name:"Not Available",discount:0}
	  result.book = book
	  if(!book.invoice){
		var inv = new Invoice(book)
		inv.booking = book._id
		await inv.save()
		book.invoice = inv._id
	  }
	  const invoice = await Invoice.findById(book.invoice)
	  result.categories = []
	  var price = 0

		for(var cat of book.service_category){
			if(cat === ""){continue}
			var category = await Category.findById(cat)
			if(category){
				price += category.price
				result.categories.push(category)
			}
		}
	  if(!invoice.amount || invoice.amount === "" || invoice.amount === 0){
		
		invoice.amount = price
	  }
	  result.invoice = invoice
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})


router.post('/deleteBook/:id',auth,  async (req, res) => {
	try {
	  const result = {}
	  const data = req.body
	  const book_id = req.params.id
	  const book = await Book.findById(book_id)
	  if(!book){
		result.message = "Book not available"
		return res.status(404).json(result)
	  }
	  if(book.user.toString() === req.user.id){
		await Book.findByIdAndDelete(book._id)
		await Invoice.findByIdAndUpdate(
			book.invoice,
			{ $set:{cancelled:true} },
			{ new: true },  
		)
		result.message = "Booking removed succsffully"
	  }else{
		result.message = "Anaouthirised acess"
		return res.status(401).jons(result)
	  }
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error')
	}
})



//@route DELETE api/models/users
//@description Delete a vehicle
//@access Private

router.delete('/deleteVehicle/:id', auth, async (req, res) => {
  try {
   
    return res.status(200).json({ message: 'Vehicle removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//@route GET api/models/users
//@description Get user Payment
//@access Private

router.post('/getBookings', auth, async (req, res) => {
  try {
	const userid = req.user.id
	const result = {}
	const user = await User.findById(userid).select("password")
	result.user = user
    const books = await Book.find({user:userid})
	result.bookings = []
	for(var book of books){
		const r = {}
		r.book = book
		var price = 0
		for(var category_id of book.service_category){
			if(category_id == ""){continue}
			const category = await Category.findById(category_id)
			price += category.price
		}
		if(!book.invoice){
			const invoice = new Invoice()
			invoice.booking = book._id
			invoice.company = book.company
			invoice.user = userid
			
			invoice.amount = price
			await invoice.save()
			r.invoice = invoice
		}else{
			const inv = await Invoice.findById(book.invoice)
			
			if(inv.amount !== price){
				await Invoice.findByIdAndUpdate(
					inv._id,
					{$set:{amount:price}},
					{new:true}
				)
				inv.amount = price
			}
			r.invoice = inv
		}
		
		const company = await Profile.findOne({company:book.company})
		r.company = company
		const service = await Service.findById(book.service)
		r.service= service
		if(service){
			data = []
			var price = 0
			for(var categ of service.categories){
				if(categ == ""){continue}
				const category = await Category.findById(categ)
				price += category.price ? category.price : 0
				data.push(category)
			}
			r.categories = data
			
		}
		
		result.bookings.push(r)
	}
    return res.status(200).json(result)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error='+error.message)
  }
})

router.post('/getServices',  async (req, res) => {
	try {
	  
	  const result = {}
	  const services = await Service.find()
	  result.services = services
		
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error='+error.message)
	}
  })

  router.post('/getCategories/:id',  async (req, res) => {
	try {
	  
	  const result = {}
	  const service_id = req.params.id
	  const service = await Service.findById(service_id)
	  if(!service){
		result.message = "Service not found"
		return res.status(404).json(result)
	  }
	  result.service = service
	  categs = []
	  for(var category_id of service.categories){
		if(category_id !== ''){
			const category = await Category.findById(category_id)
			if(category){
				categs.push(category)
			}
		}
	  }
	  result.categories = categs
	  return res.status(200).json(result)
	} catch (error) {
	  console.error(error.message)
	  res.status(500).send('Server Error='+error.message)
	}
  })


module.exports = router