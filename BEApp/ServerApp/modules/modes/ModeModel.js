const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const ModeSchema = new Schema({
    name:{type:String, required:true},
});

module.exports = mongoose.model('mode',ModeSchema);