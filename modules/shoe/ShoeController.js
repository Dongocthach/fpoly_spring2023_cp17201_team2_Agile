const ShoeService = require ('./ShoeService');
const CategoryController = require('../categories/CategoryController')

module.exports.shoes_get = async(req, res) => {
  try{
    const shoe = await ShoeService.getshoes();
    console.log(shoe);
    res.render('home', {shoes : shoe});
  }catch(error)
  {
    console.log(error)
  }    
}

module.exports.create_shoes_get = async (req, res) =>  {
    try{
      const category =await CategoryController.category_get();
      res.render('form-create-shoe', { category })
    }catch(error)
    {
      console.log(error)
    }   
}
module.exports.get_shoes_get = async (id, res) =>  {
  try{
    const shoes =await ShoeService.getshoesOne(id);
    let category = await CategoryController.category_get();
    category = category.map((p,index)=>{
      return {
        _id: p._id,
        name: p.name,
        isSelected: p._id.toString()== shoes.categoryId._id.toString(),
      }
    })
    res.render('form-edit-shoe', { shoes, category })
  }catch(error)
  {
    console.log(error)
  }   
}

module.exports.create_shoes_post = async (req, res) => {
    const { shoename, shoeprice,shoesize, shoegender,shoerealeaseddate,shoeimglink ,categoryId , userid } = req.body;
    try{
      let { file } = req;
      image = file ? file.filename :'';
      image = image ? `images/${image}`:'';

      console.log(image);
      const shoe = await ShoeService.create(shoename, shoeprice, shoesize, shoegender, shoerealeaseddate, image, categoryId, userid);
      res.redirect('/product/create-shoe');
    }catch(error)
    {
      console.log(error)
    }   
}

module.exports.update = async(req,res,id) =>{
  const { shoename, shoeprice,shoesize, shoegender,shoerealeaseddate,shoeimglink ,categoryId , userid } = req.body;
  try{
    let { file } = req;
    image = file ? file.filename :'';
    image = image ? `images/${image}`:'';
    await ShoeService.update(id,shoename, shoeprice,shoesize, shoegender,shoerealeaseddate,shoeimglink ,categoryId , userid)
    res.redirect('/product');
  }catch(error)
  {
    console.log(error);
    next(error);
  }   

}
module.exports.remove = async(id,res) =>{
  try{
    await ShoeService.deleteshoes(id);
    res.redirect('/product');
  }catch(error)
  {
    console.log(error)
  }   
}
module.exports.api_shoes_remove = async(id,res) =>{
  try{
    await ShoeService.deleteshoes(id);
    res.status(200).json({ id });;
  }catch(error)
  {
    console.log(error)
  }   
}


module.exports.api_shoes_get = async(req, res) => {
  try{
    const shoe = await ShoeService.getshoes();
    res.json({ shoe });
  }
  catch(err) {
    res.status(400).json({ err });
  }
}
module.exports.api_create_shoes_post = async (req, res) => {
  const { shoename, shoeprice,shoerealeaseddate,image  } = req.body;
  try{
    const shoe = await ShoeService.create(shoename, shoeprice, '3.5 UK', 'Both', shoerealeaseddate, image, '637cd5ae049e8a63397b9d6e', 'type1');
    res.json({ shoe });
  }catch(error)
  {
    console.log(error)
  }   
}