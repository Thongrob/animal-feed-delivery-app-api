const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const orderRoute = require("./route/orderRoute")


const app = express()

//connect to cloud database
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useUnifiedTopology:false
})
.then(() => console.log("Connect to database completed"))
.catch((err) => console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',orderRoute)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Start server in  port ${port}`))