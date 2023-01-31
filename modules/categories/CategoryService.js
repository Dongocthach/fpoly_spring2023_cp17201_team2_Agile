const CategoryModel = require('./CategoryModel');

const get = async () =>{
        const categories = await CategoryModel.find({});
    return categories;
}
const category_save = async (name, description) =>{
    const categories = new CategoryModel({name, description });
    await categories.save();
    return categories;
}

module.exports = { get,category_save  };