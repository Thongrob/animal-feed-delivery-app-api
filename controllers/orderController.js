//ติดต่อกับฐานข้อมูล
const slugify = require("slugify")
const OrderModels = require("../models/orderModel")
const { uuid } = require('uuidv4');

//บันทึกข้อมูล
exports.insert = (req, res) => {
  const {driverName, productName, bookingTime, bookingDate, author, quantity, weight, images, buyer, contact} = req.body

  const timothy = 100
  const alphapha = 120
  const rabbitFood = 200
  const goatMilk = 180
  
  let orderNumber = ""
  if(!orderNumber) orderNumber= uuid()
  if(orderNumber.length > 10) orderNumber = orderNumber.substring(0,6)
 
  switch (true) {
    case (productName === "หญ้าธีโมธี"): 
      
                      if(driverName==="ฝรั่ง"){
                        var productPrice = timothy * weight * quantity
                        var shippingPrice = 40 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "ดพ-3333"
                      }
                      if(driverName==="มะละกอ"){
                        var productPrice = timothy * weight * quantity
                        var shippingPrice = 50 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "มน-2222"
                      }
                      if(driverName==="ส้ม"){
                        var productPrice = timothy * weight * quantity
                        var shippingPrice = 60 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "กค-1111"
                      }
      break; 
    case (productName === "หญ้าอัลฟาฟ่า"): 
                      if(driverName==="ฝรั่ง"){
                        var productPrice = alphapha * weight * quantity
                        var shippingPrice = 40 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "ดพ-3333"
                      }
                      if(driverName==="มะละกอ"){
                        var productPrice = alphapha * weight * quantity
                        var shippingPrice = 50 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "มน-2222"
                      }
                      if(driverName==="ส้ม"){
                        var productPrice = alphapha * weight * quantity
                        var shippingPrice = 60 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "กค-1111"
                      }
      break; 
    case (productName === "อาหารเม็ดกระต่าย"): 
                      if(driverName==="ฝรั่ง"){
                        var productPrice = rabbitFood * weight * quantity
                        var shippingPrice = 40 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "ดพ-3333"
                      }
                      if(driverName==="มะละกอ"){
                        var productPrice = rabbitFood * weight * quantity
                        var shippingPrice = 50 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "มน-2222"
                      }
                      if(driverName==="ส้ม"){
                        var productPrice = rabbitFood * weight * quantity
                        var shippingPrice = 60 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "กค-1111"
                      }
      break; 
    case (productName === "นมแพะอัดเม็ด"): 
                      if(driverName==="ฝรั่ง"){
                        var productPrice = goatMilk * weight * quantity
                        var shippingPrice = 40 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "ดพ-3333"
                      }
                      if(driverName==="มะละกอ"){
                        var productPrice = goatMilk * weight * quantity
                        var shippingPrice = 50 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "มน-2222"
                      }
                      if(driverName==="ส้ม"){
                        var productPrice = goatMilk * weight * quantity
                        var shippingPrice = 60 * weight * quantity
                        var totalPrice = productPrice + shippingPrice
                        var car = "กค-1111"
                      }
      break; 
  }

  
  const slug = slugify(productName + orderNumber)

  //Validate
  switch (true) {
    case !driverName:
      return res.status(400).json({"error":"กรุณาเลือกคนขับ"})
      break
    case !productName:
      return res.status(400).json({"error":"กรุณาเลือกสินค้า"})
      break   
    case !bookingTime:
      return res.status(400).json({"error":"กรุณาเลือกเวลา"})
      break   
    case !bookingDate:
      return res.status(400).json({"error":"กรุณาเลือกวันที่ต้องการจัดส่ง"})
      break   
    case !quantity:
      return res.status(400).json({"error":"กรุณาใส่จำนวน"})
      break   
    case !weight:
      return res.status(400).json({"error":"กรุณาใส่น้ำหนักที่ต้องการ"})
      break   
    case !buyer:
      return res.status(400).json({"error":"กรุณาใส่ชื่อผู้สั่งซื้อ"})
      break   
    case !contact:
      return res.status(400).json({"error":"กรุณาใส่เบอร์โทรผู้สั่งซื้อ"})
      break   
  }


  OrderModels.create({orderNumber, driverName, productName, productPrice,shippingPrice, totalPrice, weight, quantity, car, bookingTime, bookingDate, slug ,images, buyer, contact, author },(err,order) => {
    if(err){
      res.status(400).json({error:err})
    }
    res.json(order)
  })
}

//ดึงข้อมูลทั้งหมด 
exports.readAll=(req,res) => {
  OrderModels.find({}).exec((err,orderes)=>{
    res.json(orderes)
  })
}


