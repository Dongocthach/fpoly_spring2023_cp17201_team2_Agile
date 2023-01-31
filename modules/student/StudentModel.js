const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ShoeSchema = new Schema({
    name :  { type : String,},
    mobile : { type : String, },
    address : { type : String, },
    course : { type : String,},
});
module.exports = mongoose.model('student', ShoeSchema);