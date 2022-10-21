const express=require('express');
const { getTestData } = require('../controllers/testController');
const router=express.Router()
router.get('/',getTestData)

module.exports=router;