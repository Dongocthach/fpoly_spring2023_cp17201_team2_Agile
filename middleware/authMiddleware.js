const jwt = require('jsonwebtoken');
const User = require('../modules/user/UserModel');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'ps19765 secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/');
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'ps19765 secret', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth, checkUser };