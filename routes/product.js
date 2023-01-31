const express = require('express');
const router = express.Router();
const ShoeController = require('../modules/shoe/ShoeController');

const middleware = require('../middleware/upload');




router.get('/', ShoeController.shoes_get);

router.get('/create-shoe', ShoeController.create_shoes_get);

router.get('/delete/:shoeid', async function(req,res,next){
    let { shoeid } = req.params
    await ShoeController.remove(shoeid,res)
});

router.get('/edit/:shoeid', async function(req,res,next){
    let { shoeid } = req.params;
    await ShoeController.get_shoes_get(shoeid,res)

});
router.post('/edit/:shoeid',  [middleware.single('image')], async function(req,res,next){
    let { shoeid } = req.params;
    await ShoeController.update(req,res,shoeid)

});
// router.post('/create-shoe', ShoeController.create_shoes_post);

router.post('/create-shoe', [middleware.single('image')],ShoeController.create_shoes_post);

/* API */



module.exports = router;

/* GET home page. */
// router.get('/',async function(req,res,next){
//     const shoe = ShoeController.shoes_get;
//     res.render('home', {shoes : shoe});
// } ) 