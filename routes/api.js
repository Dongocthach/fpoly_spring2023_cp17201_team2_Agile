const express = require('express');
var multer = require('multer');

const router = express.Router();
const PlayerController = require('../modules/player/PlayerController');
const CategoryController = require('../modules/categories/CategoryController');
const ShoeController = require('../modules/shoe/ShoeController');
const StudentController = require('../modules/student/StudentController');


router.post('/student/create', StudentController.api_create_student_post);
router.get('/student/delete/:studentid', async (req,res)=>{
    let { studentid } = req.params
    StudentController.api_student_remove(studentid,res)
});
router.get('/student/get-one/:studentid', async (req,res)=>{
    let { studentid } = req.params
    StudentController.api_student_get(studentid,res)
});


router.post('/login', PlayerController.login_post);
router.post('/signup', PlayerController.signup_post);
router.post('/category-create', CategoryController.category_create);



router.get('/shoes', ShoeController.api_shoes_get);
router.post('/shoes/create', ShoeController.api_create_shoes_post);

router.get('/delete/:shoeid', async (req,res)=>{
    let { shoeid } = req.params
    ShoeController.api_shoes_remove(shoeid,res)
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
      }
});

var upload = multer({ storage: storage }).single('image');

router.post('/upload', async (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err)
        } else {
            var FileName = req.file.filename;
            res.status(200).send(FileName);
        }
    })
});

module.exports = router;
