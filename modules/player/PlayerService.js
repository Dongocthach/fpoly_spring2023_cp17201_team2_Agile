const PlayerModel = require('./PlayerModel');

const pllogin = async (account, password) =>{
    const player = await PlayerModel.findOne({account});
    if(player && password === player.password){
        return player;
    }
    return null;
}

const plregister = async (account, password, fullname, gender,email) =>{
    const player = new PlayerModel({account, password, fullname, gender,email });
    await player.save();
    return player;
}

module.exports = { pllogin, plregister };