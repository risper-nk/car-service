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


router.post('/getAnalysis',auth,  async (req, res) => {
	try {
	  const result = {}
	  const company_id = req.user.company
	  const invoice = await Invoice.find({company:company_id})
	  const bookings = await Book.find({company:company_id})
	  const services = await Services.find({company:company_id})
	  const handler = await Handler.find({company:company_id}) 
	  result.invoice = {data:[],total:0,complete:0}
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

	  const company = await Company.findById(service.company)
	  var price = 0
		for(var category_id of data.service_category){
			const category = await Category.findById(category_id)
			price += category.price
		}
	  const invoice = new Invoice() 
	  const book = new Book(data)
	  book.invoice = invoice._id
	  invoice.booking = book._id
	  invoice.company = company._id
	  invoice.amount = price
	  book.user = req.user.id
	  book.company = company._id
	  await book.save()
	  await invoice.save()
	  result.message = "Booking complete"
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
    const books = await Book.find({user:userid})
	result.bookings = []
	for(var book of books){
		const r = {}
		r.book = book
		if(!book.invoice){
			const invoice = new Invoice()
			invoice.booking = book._id
			invoice.company = book.company
			invoice.user = userid
			var price = 0
			for(var category_id of book.service_category){
				const category = await Category.findById(category_id)
				price += category.price
			}
			invoice.amount = price
			await invoice.save()
		}
		const company = await Profile.findOne({company:book.company})
		r.company = company
		const service = await Service.findById(book.service)
		r.service= service
		data = []
		for(var categ of service.category){
			const category = await Categpry.findById(categ)
			data.push(category)
		}
		r.service.category = data
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