const ShoeModel = require('./ShoeModel');

const create = async (name, price, size, gender, releaseddate,shoeimglink,categoryId, userid) =>{
    const shoe = new ShoeModel({name, price, size, gender,shoeimglink, releaseddate, categoryId, userid});
    await shoe.save();
    return shoe;
}
const getshoes = async () =>{
    const shoes = await ShoeModel.find({}).populate('categoryId', '_id name');
    return shoes;
}
const getshoesOne = async (id) =>{
    const shoes = await ShoeModel.findById(id).populate('categoryId', '_id name');
    return shoes;
}
const update = async (id,name, price, size, gender, releaseddate,shoeimglink,categoryId, userid)=>{
    const shoes = await ShoeModel.findById(id);
    const model = await ShoeModel.findByIdAndUpdate(
        id,{ name, price, size, gender,shoeimglink: shoeimglink ? shoeimglink : shoes.shoeimglink , releaseddate, categoryId, userid});
    return model;
}
const deleteshoes = async (id) =>{
    await ShoeModel.deleteOne({_id: id});
}

module.exports = { create, getshoes, deleteshoes, getshoesOne,update };