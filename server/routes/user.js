const router = require("express").Router();
const {verifyTokenAndAutherization, verifyTokenAndAdmin} = require("./verifyToken")
const User = require("../models/User");


// Update A User
router.put("/:id", verifyTokenAndAutherization, async (req, res) => {
    if(req.body.password){
        const hashedPassword = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true}
        )
        res.status(200).json(updatedUser)
    }catch(err){
        res.status.json(err);
    }
})

// Delete A User
router.delete("/:id", verifyTokenAndAutherization, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted..");
    }catch(err){
        res.status(500).json(err);
    }
})
// Get A User
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const { password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(400).json(err)
    }
})
// Get All Users 
router.get("/", verifyTokenAndAdmin, async (req, res) => {
        const query = req.params.new;
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find()
        res.status(200).json(users);
    }catch(err){
        res.status(400).json(err)
    }
})

// Get User Stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
     
})

module.exports = router