const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ShoeSchema = new Schema({
    name :  { type : String,},
    price : { type : String, },
    size : { type : [String], },
    gender : { type : String, },
    releaseddate : { type : String,},
    shoeimglink : { type : String},
    categoryId : { type : ObjectId, ref : 'category'},
    userid : { type : String,},


});
module.exports = mongoose.model('shoe', ShoeSchema);