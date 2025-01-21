const express = require('express')
const path = require('path')

const router = express.Router();

router.get("/",(req, res, next)=>{
    console.log("In the middleware");
    // can't use directly path like ./view/shop.html as it takes root folder of OS not the given directory
    res.sendFile(path.join(__dirname,'../','view','shop.html'));
}) 

module.exports = router