var express = require('express');
var router = express.Router();
var UserController  = require ('../modules/user/UserController');

router.get('/signup', UserController.signup_get);
router.post('/signup', UserController.signup_post);
router.get('/login', UserController.login_get);
router.post('/login', UserController.login_post);
router.get('/logout', UserController.logout_get);

router.post('/api/login', UserController.api_login_post);
router.post('/api/signup', UserController.api_signup_post);

module.exports = router;
