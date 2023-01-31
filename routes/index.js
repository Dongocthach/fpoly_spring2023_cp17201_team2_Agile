const express = require('express');
const router = express.Router();
const UserController = require('../modules/user/UserController');


// router.get('/456/:hinh', function(req, res, next) {
//   const { hinh } = req.params;
//   const { bankinh , dai , rong } = req.query;
//   if(hinh == 'hcn'){
//     const dientich = Number(dai) * Number(rong);
//     res.json({ name: 'dien tich hinh chu nhat la : ', dientich : dientich  });
//   }else if(hinh == 'dientichhinhtron'){
//     const dt = Number(bankinh) * Number(3.14);
//     res.json({ name: 'dien tich hinh tron la :',dt: dt  });
//   }
//   else{
//     res.json( { name: 'khong co ket qua ',dt: 0 });
//   }
// });

// router.post('/456/tongsole', function(req, res, next) {
//   let {min, max} = req.query;
//   let tongsole =0;
//   for (min ; min < max; min++) {
//     if(min % 2 != 0)
//       tongsole = Number(tongsole) + Number(min);   
//   }
//   res.json( { name: 'tong so le la ',  tongsole: tongsole , min : min, max : max});

// });



/* start user route */

// router.get('/user', function(req, res, next) {
//   res.render('login');
// });
// router.get('/user/register', function(req, res, next) {
//   res.render('register');
// });
// router.post('/user',async function(req, res, next) {
//   try{
//     const { email, password} = req.body;
//     const user = await UserController.login(email, password);
//     if(user){
//       res.redirect('/home');
//     }
//     else {
//       res.status(401).json({ error : ' Sai email hoac mat khau'});
//     }
//   }catch (error){
//     res.status(401).json({error: error.message})
//   }
// })


// router.post('/users/register',async function(req, res, next) {
//   try {
//     const { name, email, password, phone, confirm_password} = req.body;
//     const user = await UserController.register( name, email, password, phone, confirm_password);
//     res.json({user});
//   }catch (error){
//     res.status(400).json({ error: error.message});
//   }
// });
/* end user route */

/* shoes route */
router.get('/', function(req, res,next){
  res.render('index')
})

module.exports = router;
