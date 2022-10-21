const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

// Register
router.post('/register', async (req, res) => {
    const newUser = User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,"asdasdsad").
        toString()
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
        
    }catch(err){
        res.status(500).json(err + "asd")
    }
})

// Login
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({username:req.body.username})
        !user && res.status(401).json({err:"wrong credentials!"})

        const hashedPassword = CryptoJS.AES.decrypt(user.password,"asdasdsad")
        const password = hashedPassword.toString(CryptoJS.enc.Utf8)
        password !== req.body.password && res.status.json({err:"wrong credentials!"})
        const accessToken = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin},
            "token",
            {expiresIn:"3d"}
        )
        return res.status(200).json({user,accessToken})

    }catch(err){
        res.status(500).json(err+ " sasds")
    }
})

module.exports = router