const express = require('express');
const router = express.Router();
const ShoeController = require('../modules/shoe/ShoeController');
const StudentController = require('../modules/student/StudentController');
const middleware = require('../middleware/upload');

router.get('/new-student', StudentController.addnew_student);


router.post('/new-student', StudentController.create_student_post);

router.get('/edit/:studentid', async function(req,res,next){
    let { studentid } = req.params;
    await StudentController.get_student_get(studentid,res)

});
router.post('/edit/:studentid',  async function(req,res,next){
    let { studentid } = req.params;
    await StudentController.update(req,res,studentid)

});
module.exports = router;

/* GET home page. */
// router.get('/',async function(req,res,next){
//     const shoe = ShoeController.shoes_get;
//     res.render('home', {shoes : shoe});
// } ) 