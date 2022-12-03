const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req,res) => {
    res.send("Hello !!");
});

router.post('/register',(req,res)=>{

    const {email, password} = req.body; //array destructuring ES6

    console.log(email);

    if (!email || !password) {
        res.status(422).json({
            error : "Not filled !!"
        });
        //422 is used for mistakes made by client
    }
    // res.json({message : req.body});

    User.findOne({email:email})
        .then((userExist)=>{
        if (userExist) {
            res.status(422).json({
                error : "Email already registered !!"
            });
        }
        const user = new User({email,password});
        user.save().then(()=>{
            res.status(201).json({
                message : "user registered successfully !!"
            });
        }).catch((err)=>{
            res.status(500).json({error:"Not registered !!"});
        });
    }).catch(err => {console.log(err);});
});

module.exports = router;