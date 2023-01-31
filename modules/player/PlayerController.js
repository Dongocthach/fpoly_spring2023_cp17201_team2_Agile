const PlayerService = require ('./PlayerService');

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

  
module.exports.signup_post = async (req, res) => {
    const {account, password, fullname, gender,email} = req.body;
    try {
      const player = await PlayerService.plregister( account, password, fullname, gender, email);
      res.json({player});
      // res.status(201).json({ player});
    }
    catch(err) {
      res.status(400);
    }
   
}


module.exports.login_post = async (req, res) => {
    const { account, password } = req.body;
    try {
      const player = await PlayerService.pllogin(account, password);
      res.json({ player });

    } 
    catch (err) {
      res.status(400);
    }
  
}


