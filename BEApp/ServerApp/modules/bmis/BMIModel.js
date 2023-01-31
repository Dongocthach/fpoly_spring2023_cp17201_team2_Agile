const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const BIMSchema = new Schema({
    height:{type:Number, required:true},
    weight:{type:String, required:true, unique:true},
    date:{type:String, required:true},
    customerId:{type:String, required:true},
});

module.exports = mongoose.model('bmi',BIMSchema);