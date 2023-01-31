const UserModel = require('./UserModel');
const bcrypt = require('bcryptjs')

const login = async (email, password) =>{
    const user = await UserModel.findOne({email});
    if(user && bcrypt.compareSync(password, user.password)){
        console.log("check password login"+bcrypt.compareSync(password, user.password));
        return user;
    }
    return null;
}

const register = async (name, email, password, fullname, gender, phone, city, link_img) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = new UserModel({name, email, password: hash, fullname, gender, phone, city, link_img});
    await user.save();
    return user;
}


module.exports = { login, register };