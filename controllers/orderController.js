//ติดต่อกับฐานข้อมูล
const slugify = require("slugify")
const OrderModels = require("../models/orderModel")
const { uuid } = require('uuidv4');

//บันทึกข้อมูล
exports.insert = (req, res) => {
  const {driverName, timothyItem, alphaphaItem, rabbitItem, goatItem, bookingTime, bookingDate, author, timothyQuantity, alphaphaQuantity, rabbitQuantity, goatQuantity , timothyWeight, alphaphaWeight, rabbitWeight, goatWeight , images, buyer, contact} = req.body

  const timothy = 100
  const alphapha = 120
  const rabbitFood = 200
  const goatMilk = 180
  
  let orderNumber = ""
  if(!orderNumber) orderNumber= uuid()
  if(orderNumber.length > 10) orderNumber = orderNumber.substring(0,6)
 
  switch (driverName) {
    case ("ฝรั่ง") : 
      
        if(timothyItem==="หญ้าธิโมธี" || alphaphaItem==="หญ้าอัลฟาฟ่า" || rabbitItem==="อาหารเม็ดกระต่าย" || goatItem==="นมแพะอัดเม็ด"){
          var productPrice = (timothy * timothyWeight * timothyQuantity) + (alphapha * alphaphaWeight * alphaphaQuantity) + (rabbitFood * rabbitWeight * rabbitQuantity) + (goatMilk * goatWeight * goatQuantity)
          var shippingPrice = 40 * ((timothyWeight * timothyQuantity) + (alphaphaWeight * alphaphaQuantity) + (rabbitWeight * rabbitQuantity) + (goatWeight * goatQuantity))
          var totalPrice = productPrice + shippingPrice
          var car = "ดพ-3333"                    
        }
      break; 

    case ("มะละกอ"): 
        if(timothyItem==="หญ้าธิโมธี" || alphaphaItem==="หญ้าอัลฟาฟ่า" || rabbitItem==="อาหารเม็ดกระต่าย" || goatItem==="นมแพะอัดเม็ด"){
          var productPrice = (timothy * timothyWeight * timothyQuantity) + (alphapha * alphaphaWeight * alphaphaQuantity) + (rabbitFood * rabbitWeight * rabbitQuantity) + (goatMilk * goatWeight * goatQuantity)
          var shippingPrice = 50 * ((timothyWeight * timothyQuantity) + (alphaphaWeight * alphaphaQuantity) + (rabbitWeight * rabbitQuantity) + (goatWeight * goatQuantity))
          var totalPrice = productPrice + shippingPrice
          var car = "มน-2222"                    
        }                      
      break; 

    case ("ส้ม"): 
        if(timothyItem==="หญ้าธิโมธี" || alphaphaItem==="หญ้าอัลฟาฟ่า" || rabbitItem==="อาหารเม็ดกระต่าย" || goatItem==="นมแพะอัดเม็ด"){
          var productPrice = (timothy * timothyWeight * timothyQuantity) + (alphapha * alphaphaWeight * alphaphaQuantity) + (rabbitFood * rabbitWeight * rabbitQuantity) + (goatMilk * goatWeight * goatQuantity)
          var shippingPrice = 60 * ((timothyWeight * timothyQuantity) + (alphaphaWeight * alphaphaQuantity) + (rabbitWeight * rabbitQuantity) + (goatWeight * goatQuantity))
          var totalPrice = productPrice + shippingPrice
          var car = "กค-1111"                    
        }    
      break;                   
  }

  
  const slug = slugify(timothyItem + orderNumber)

  //Validate
  switch (true) {
    case !driverName:
      return res.status(400).json({"error":"กรุณาเลือกคนขับ"})
      break
    case !bookingTime:
      return res.status(400).json({"error":"กรุณาเลือกเวลา"})
      break   
    case !bookingDate:
      return res.status(400).json({"error":"กรุณาเลือกวันที่ต้องการจัดส่ง"})
      break   
    case !buyer:
      return res.status(400).json({"error":"กรุณาใส่ชื่อผู้สั่งซื้อ"})
      break   
    case !contact:
      return res.status(400).json({"error":"กรุณาใส่เบอร์โทรผู้สั่งซื้อ"})
      break   
    case !author:
      return res.status(400).json({"error":"กรุณาใส่ชื่อผู้บันทึก"})
      break   
  }


  OrderModels.create({orderNumber, driverName, timothyItem, alphaphaItem, rabbitItem, goatItem, productPrice,shippingPrice, totalPrice, timothyWeight, alphaphaWeight, rabbitWeight, goatWeight, timothyQuantity, alphaphaQuantity, rabbitQuantity, goatQuantity, car, bookingTime, bookingDate, slug ,images, buyer, contact, author },(err,order) => {
    if(err){
      res.status(400).json({error:err})
    }
    res.json(order)
  })

  // //debug before insert data to database
  // res.json({
  //   data:{orderNumber, driverName, timothyItem, alphaphaItem, rabbitItem, goatItem, productPrice,shippingPrice, totalPrice, timothyWeight, alphaphaWeight, rabbitWeight, goatWeight, timothyQuantity, alphaphaQuantity, rabbitQuantity, goatQuantity, car, bookingTime, bookingDate, slug ,images, buyer, contact, author }
  // })

}

//ดึงข้อมูลทั้งหมด 
exports.readAll=(req,res) => {
  OrderModels.find({}).exec((err,orderes)=>{
    res.json(orderes)
  })
}


