const StudentModel = require('./StudentModel');

const create = async (name, mobile, address, course) =>{
    const student = new StudentModel({name, mobile, address, course});
    await student.save();
    return student;
}
const getstudent = async () =>{
    const shoes = await ShoeModel.find({});
    return shoes;
}
const getstudentone = async (id) =>{
    const student = await StudentModel.findById(id);
    return student;
}
const update = async (id,name, mobile, address, course)=>{
    const model = await StudentModel.findByIdAndUpdate(
        id,{name, mobile, address, course});
    return model;
}
const deletestudent = async (id) =>{
    await StudentModel.deleteOne({_id: id});
}

module.exports = { create, getstudent, getstudentone,update,deletestudent };