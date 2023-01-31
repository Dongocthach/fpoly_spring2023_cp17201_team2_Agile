const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const DetailSchema = new Schema({
    name:{type:String, required:true},
    time:{type:String, required:true},
    intensity:{type:String, required:true},
    status:{type:String, required:true},
    calonumber:{type:Number, required:true},
    modecode:{type:String, required:true},
});

module.exports = mongoose.model('detailmode',DetailSchema);