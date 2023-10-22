const hat = require('hat');
const bcrypt = require("bcrypt");
const {User} = require('../models/sequelize')

exports.register=async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let passwordHash = bcrypt.hashSync(password, 10);
   
    let user = await User.findOne({where:{email:email}});
    if (!user) {

        let userToken = hat();

        await User.create({ 
            name: name,
            email:email,
            password:passwordHash,
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

exports.login=async (req,res)=>{

    let email=req.body.email;
    let password=req.body.password;
    let webUser=await User.findOne({where: {email: email}});
    if(webUser){
        if(webUser.password){
            const checkPass = await bcrypt.compare(password,webUser.password);
            if(checkPass){
                res.status(200);
                res.json({
                    status_code: 200,
                    message: "Login successfully",
                    data: {
                        name:webUser.name,
                        user_token:webUser.user_token,
                    }
                });
            }else{
                res.status(400);
                res.json({
                    status_code: 400,
                    message: "Password incorrect",
                    data: {}
                });
            }
        }else{
            res.status(400);
            res.json({
                status_code: 400,
                message: "you must set a password",
                data: {}
            });
        }
    }else{
        res.status(404);
        res.json({
            status_code: 404,
            message: "This email does not exist!",
            data: {}
        });
    }
}

