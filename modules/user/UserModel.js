const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name :  { type : String, required : true},
    email : { type : String, required : true, unique: true},
    password : { type : String, required : true},
    fullname : {type : String},
    gender : {type : String},
    phone : { type : Number, required : true, default: 0 },
    city : {type : String},
    link_img : {type : String, required : false, default: 'null'}


});
module.exports = mongoose.model('user', UserSchema);