const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'user',
	},
	company:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'company',
	},
	invoice:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'invoice',
	},
	service:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'service',
	},
	active:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'active',
	},
	handler:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'handler',
	},
	vehicle_year:{
		type:String,
	},
	service_date:{
		type:Date,
		required:true,
	},
	service_category:{
		type:Array,
		default:[]
	},
	service_time:{
		type:String,
		
	},
	description:{
		type: mongoose.Schema.Types.Object,
		default:{default:true}
	},
	vehicle_make:{
		type:String,
	},
	vehcile_mileage:{
		type:String,
	},
	
	checkout:{
		type:Date,
		
	},
	
	saved:{
		type:Boolean,
		default:true,
	},
	complete:{
		type:Boolean,
		default: false,
	},

	comments:{
		type:String,

	},
	
    date: {
        type: Date,
        default: Date.now(),
    }
	
});

module.exports = mongoose.model('booking', BookingSchema);