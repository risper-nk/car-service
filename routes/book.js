const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const Parking = require('../models/Parking')
const Book = require('../models/Booking')
const Vehicle = require('../models/Vehicle')
const Payment = require('../models/Payment')
const Spot = require('../models/Spot')
const Invoice = require('../models/Invoice')
const Notification = require('../models/Notification')
const Active = require('../models/Active')
const History = require('../models/History')


const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('../config/default.json')
const auth = require('../middlewares/auth')

//@route GET api/booking
//@description Get all bookings
//@access Private

router.get('/getBookings', auth, async (req, res) => {
  try {
	const userid = req.user.id
    const bookings = await Book.find({ user:userid })
	const found = []
	for(const booking of bookings){
		const park = {}
		const spot = await Spot.findById(booking.spot);
		const active = await Active.findOne({booking:booking._id});
		const parking = await Parking.findById(spot.parking)
		const invoice = await Invoice.findById(booking.invoice)
		const vehicle = await Vehicle.findById(booking.vehicle);
		if(!invoice){continue}
		
		if(spot) park.spot = spot
		if(active) park.active = active
		if(parking) park.parking = parking
		if(vehicle) park.vehicle = vehicle
		park.booking = booking
		park.invoice = invoice
		found.push(park)		
	}
    return res.status(200).json(found)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error='+error.message)
  }
})

router.get('/getBooking/:id', auth, async (req, res) => {
    
    const userid = req.user.id
	const bookid = req.params.id
	
    try {
		const booking = await Book.findById(bookid)
		if(!booking){
			return res.status(404).json({message:"No booking found"})
		}
		if(booking){
			const park = {}
			const spot = await Spot.findById(booking.spot);
			const parking = await Parking.findById(spot.parking)
			const active = await Active.findOne({booking:booking})
			const invoice = await Invoice.findById(booking.invoice)
			const vehicle = await Vehicle.findById(booking.vehicle);
			if(spot) park.spot = spot
			if(parking) park.parking = parking
			if(vehicle) park.vehicle = vehicle
			park.active = active
			park.booking = booking
			return res.status(200).json(park)
		}
    } catch (error) {
      console.log(error.message)
      res.status(500).send('Server Error')
    }
})

router.put('/updateBooking/:id', auth, async (req, res) => {
  try {
	const stats = req.body
	const bookid = req.params.id
    const booking = await Book.findById(bookid)
	if(!booking){
		return res.status(404).json({message:"No booking found"})
	}
	await Book.findByIdAndUpdate(
		booking._id,
		{ $set: stats },
		 { new: true },
	)
	
    return res.status(200).json({message:"Booking updated success"})
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error='+error.message)
  }
})


//@route POST api/booking
//@description Add new booking
//@access Private

router.post('/newBooking/:id', auth, async (req, res) => {
   
    res.status(200).send({message:"Success"})
   
 })

router.delete('/deleteBooking/:id', auth, async (req, res) => {
  try {
    
	const userid = req.user.id
	const bookid = req.params.id
	const book = await Book.findById(bookid)
    if (!book) return res.status(404).json({ message: 'Booking not found' })

    // Make sure user owns contact
    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    await Book.findByIdAndRemove(req.params.id)
	await Invoice.findByIdAndUpdate(
		book.invoice,
	  { $set: {deleted:true,date:Date.now()} },
	  { new: true },
	)
	const history = History.findOne({user:userid,booking:bookid})
	if(history){
		await History.findByIdAndUpdate(
			history._id,
		  { $set: {deleted:true,date:Date.now()} },
		  { new: true },
		)
	}

    return res.status(200).json({ message: 'Booking removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})


router.get('/getAll/users', auth, async (req, res) => {
  try {
	
    const users = await User.find({  }).select("-password")
	const found = []
	
	
    return res.status(200).json(users)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error='+error.message)
  }
})

module.exports = router
