const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const CustomerSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    age:{type:Number, required:true},
    sex:{type:String, required:true},
    address:{type:String, required:true},
});

module.exports = mongoose.model('customer',CustomerSchema);