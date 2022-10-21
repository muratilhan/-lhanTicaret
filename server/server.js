const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')    
const app = express();
const authRoute = require('./routes/auth')
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")

app.use(express.json());
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)


app.listen(5000, () => {
    mongoose.connect("mongodb+srv://muratilhan1:muratilhan1@ecommercecluster.bvritie.mongodb.net/?retryWrites=true&w=majority")
    .then(()=> console.log("connected to mongo-db"))
    .catch((err)=>console.log(err))
})
