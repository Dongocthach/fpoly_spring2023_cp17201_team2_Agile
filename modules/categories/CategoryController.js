const categoryService = require('./CategoryService');

module.exports.category_get = async () =>{
    try{
        const categories = await categoryService.get();
        return categories;
    }catch (error){
        console.log(error);
    }
}

module.exports.category_create = async (req, res) => {
    const {name, description} = req.body;
    try {
      const categories = await categoryService.category_save(name, description);
      res.json({categories});
      res.status(201).json({ categories});
    }
    catch(err) {
      res.status(400);
    }
   
}

