const hat = require('hat');
const {User} = require('../models/sequelize')

exports.register=async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
   
    let user = await User.findOne({where:{email:email}});
    if (!user) {

        let userToken = hat();

        await User.create({ 
            name: name,
            email:email,
            password:password,
            user_token:userToken,
        });

        
        res.status(200);
        res.json({
            status_code: 200,
            message: "you registered successfully",
            data: {}
        });
    } else {
        res.status(400);
        res.json({
            status_code: 400,
            message: "this email exist",
            data: {}
        });
    }
}

