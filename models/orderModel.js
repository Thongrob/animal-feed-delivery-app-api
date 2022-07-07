//orderNumber, driverName, producName, price, car, weight
const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
  orderNumber:{
    type:String,
    require:false,
    unique:false
  },
  driverName : {
    type:String,
    require:true
  },
  productName : {
    type:String,
    require:true
  },
  weight:{
    type:Number,
    require:true
  },
  quantity:{
    type:Number,
    require:true
  },
  car:{
    type:String,
    require:false
  },
  bookingTime:{
    type:String,
    require:true
  },
  bookingDate:{
    type:String,
    require:true
  },
  productPrice:{
    type:Number,
    require:false
  },
  shippingPrice:{
    type:Number
  },
  totalPrice:{
    type:Number
  },
  images:{
    type:String,
    require:false
  },
  buyer:{
    type:String,
    require:true
  },
  contact:{
    type:String,
    require:true
  },
  author:{
    type:String,
    default:"Admin"
  },
  slug:{
    type:String,
    lowercase:true,
    require:true,
  }

},{timestamps:true})

module.exports = mongoose.model("orderModel", orderSchema)