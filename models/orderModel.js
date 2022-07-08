//orderNumber, driverName, producName, price, car, weight
const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
  orderNumber:{
    type:String,
    required:false,
    unique:false
  },
  driverName : {
    type:String,
    required:true
  },
  timothyItem : {
    type:String,
    required:false
  },
  alphaphaItem : {
    type:String,
    required:false
  },
  rabbitItem : {
    type:String,
    required:false
  },
  goatItem : {
    type:String,
    required:false
  },
  timothyWeight:{
    type:Number,
    required:false
  },
  alphaphaWeight:{
    type:Number,
    required:false
  },
  rabbitWeight:{
    type:Number,
    required:false
  },
  goatWeight:{
    type:Number,
    required:false
  },
  timothyQuantity:{
    type:Number,
    required:false
  },
  alphaphaQuantity:{
    type:Number,
    required:false
  },
  rabbitQuantity:{
    type:Number,
    required:false
  },
  goatQuantity:{
    type:Number,
    required:false
  },
  car:{
    type:String,
    required:false
  },
  bookingTime:{
    type:String,
    required:true
  },
  bookingDate:{
    type:String,
    required:true
  },
  productPrice:{
    type:Number,
    required:false
  },
  shippingPrice:{
    type:Number
  },
  totalPrice:{
    type:Number
  },
  images:{
    type:String,
    required:false
  },
  buyer:{
    type:String,
    required:true
  },
  contact:{
    type:String,
    required:true
  },
  author:{
    type:String,
    default:"Admin"
  },
  slug:{
    type:String,
    lowercase:true
  }

},{timestamps:true})

module.exports = mongoose.model("orderModel", orderSchema)