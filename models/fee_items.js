const mongoose = require('mongoose');
require('dotenv').config({})
const fee_itemSchema = new mongoose.Schema({
 school_fee:{type:String},
 bus_fee_to_and_fro:{type:String},
 bus_fee_one_way:{type:String},
 boarding_fee:{type:String},
 waec_fee:{type:String},
 graduation_fee:{type:String},
date: { type: Date, default: Date.now }, 

}, {
    strict: false
});


const Fee_item = module.exports= mongoose.model('Fee_item', fee_itemSchema)



