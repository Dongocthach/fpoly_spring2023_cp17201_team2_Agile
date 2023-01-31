const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const ResultSchema = new Schema({
    content:{type:String, required:true},
    customerId:{type:String, required:true},
    detailId:{type:String, required:true}
});

module.exports = mongoose.model('result',ResultSchema);