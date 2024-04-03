const mongoose = require('mongoose');

const db = "mongodb+srv://franciscagatwiri1:ZGhsjDnLRoDJazdo@cluster0.cwr1bxe.mongodb.net/getcarservices?retryWrites=true&w=majority";
//const db = "mongodb://127.0.0.1:27017"


const connectDB = async () => {
  try {
  await mongoose.connect(db)
  console.log('MongoDB connection established')
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = connectDB;