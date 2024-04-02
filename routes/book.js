const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const Parking = require('../models/Parking')
const Book = require('../models/Booking')
const Vehicle = require('../models/Vehicle')
const Payment = require('../models/Payment')

const Invoice = require('../models/Invoice')
const Notification = require('../models/Notification')
const Active = require('../models/Active')


const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('../config/default.json')
const auth = require('../middlewares/auth')

//@route GET api/booking
//@description Get all bookings
//@access Private

router.get('/getBookings', auth, async (req, res) => {
  try {
	
    return res.status(200).json([])
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error='+error.message)
  }
})

router.get('/getBooking/:id', auth, async (req, res) => {
    
    const userid = req.user.id
	const bookid = req.params.id
	
    try {
		res.status(200).json({})
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
