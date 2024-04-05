const mongoose = require('mongoose');

const checkoutSchema = mongoose.Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
	},
	
    invoice:{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'invoice'
	},
    tracking_number:{
		type: String, 
	},
	amount:{
		type:Number,
	},
	descripiton:{
        type: mongoose.Schema.Types.Object,
		default:{default:true},
	},
	clockedout: {
        type: Date,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('checkout', checkoutSchema);