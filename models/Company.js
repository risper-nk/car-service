const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
	user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
	paypal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'paypal'
    },
	stripe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stripe'
    },
    shipping:{
        type:Array,
        default:[]
    },
    tax:{
        type:Array,
        default:[]
    },
    name: {
        type: String,
        
    },
    email: {
        type: String, 
       
    },
	phone: {
        type: Number,
       default:null,
    },
	
	address: {
        type: String, 
		default:null,
    },
	country: {
        type: String, 
		default:null,
    },
	state: {
        type: String, 
		default:null,
    },
	code: {
        type: String, 
		default:null,
    },
	
    password: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('company', companySchema);