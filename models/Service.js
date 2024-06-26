const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
    },
    name: {
        type: String,
		required:true
    },
	description:{
        type:String,
    },
    discount:{
        type:Number,
    },
    type:{
        type:String,
    },
	image:{
        type:String,
    },
    shipping_detail:{
        type:mongoose.Schema.Types.Object,
        default:{operator:undefined,price:undefined}
    },
    categories:{
        type:Array,
        default:[]
    },
    key:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('service', serviceSchema);