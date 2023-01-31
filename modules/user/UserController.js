const UserService = require ('./UserService');
const jwt = require('jsonwebtoken');


// const register = async (name, email, password, phone, confirm_password)=>{
//     if(password !== confirm_password){
//         throw new Error('Password and confirm password are not the same');
//     }
//     const user = await UserService.register(name, email, password, phone);
//     return user;
// }

// const login = async(email, password)=>{
//     const user = await UserService.login(email, password);
//     return user;
// }


// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // incorrect email
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
  
    // incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'ps19765 secret', {
    expiresIn: maxAge
  });
};

module.exports.signup_get = (req, res) => {
    res.render('register');
  }
  
module.exports.login_get = (req, res) => {
    res.render('login');
  }
  
module.exports.signup_post = async (req, res) => {
    const { email,  username, password, confirm_password, fullname, gender, phone,city } = req.body;
    console.log(email,  username , password, confirm_password, fullname, gender, phone, city);
  
    try {
      const user = await UserService.register( username, email, password, fullname, gender, phone, city);
    //   const token = createToken(user._id);
    //   res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      // res.status(201).json({ user: user._id });
    }
    catch(err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
   
}
  
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await UserService.login(email, password);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.redirect('/product');
    } 
    catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
  
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

/* api */
module.exports.api_login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserService.login(email, password);
    const access_token = createToken(user._id);
    const refresh_token = jwt.sign({user}, 'ps19765',{expiresIn: 90*24*60*60});
    res.json({ user,access_token,refresh_token });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

}

module.exports.api_signup_post = async (req, res) => {
  const { email,  username, password, confirm_password, phone} = req.body;
  try {
    const user = await UserService.register(username, email, password, '', '', phone,'');
    res.status(201).json({ user});
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

}
  
