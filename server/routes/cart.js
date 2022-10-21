const router = require("express").Router();
const {verifyTokenAndAutherization, verifyTokenAndAdmin, verifyToken} = require("./verifyToken")
const Cart = require("../models/Cart");


// Create a Cart
router.post("/", verifyToken , async (req, res) => {
    const newCart = new Product(req.body);
    try {
        const savedCart = await savedCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(400).json(err);

    }
})


// Update A Cart
router.put("/:id", verifyTokenAndAutherization , async (req, res) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true}
        )
        res.status(200).json(updatedCart)
    }catch(err){
        res.status.json(err);
    }
})

// Delete A Cart
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted..");
    }catch(err){
        res.status(500).json(err);
    }
})
// Get A  User Cart
router.get("/find/:userId", verifyTokenAndAutherization, async (req, res) => {
    try{
        const cart = await Cart.find({userId: req.params.userId});
        res.status(200).json(cart);
    }catch(err){
        res.status(400).json(err)
    }
})
// Get All Carts 
router.get("/",verifyTokenAndAdmin, async (req, res) => {
        try{
            const carts = await Cart.find();
            res.status(200).json(carts)
        }catch(err){
            res.status(500).json(err)
        }
})


module.exports = router