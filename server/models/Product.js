const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    color:{
        type:Array,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    count:{
        type:Number,
        default:1
    },
    inStock:{
        type:Boolean,
        default:true
    }

},{timestamps:true})

module.exports = mongoose.model("Product", productSchema)