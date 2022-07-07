const express = require("express")
const router = express.Router()
const {insert, readAll} = require("../controllers/orderController")

router.post('/insert', insert)
router.get('/orderes', readAll)

module.exports = router