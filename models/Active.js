const mongoose = require('mongoose');

const activeSchema = mongoose.Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
	},
	handler:{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'handler'
	},
	booking:{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'booking'
	},
    company:{
		type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
	},
    tracking_number:{
		type: String,
        
	},
	complete:{
		type:Boolean,
		default:false,
	},
	clockedout: {
        type: Date,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('active', activeSchema);