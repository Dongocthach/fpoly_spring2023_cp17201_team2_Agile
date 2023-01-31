const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PlayerSchema = new Schema({
    account :  { type : String, required : true},
    password : { type : String, required : true},
    fullname : {type : String},
    gender : {type : String},
    email : {type : String}


});
module.exports = mongoose.model('player', PlayerSchema);