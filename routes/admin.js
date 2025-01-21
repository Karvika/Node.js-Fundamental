const express = require('express');
const path = require('path')

const router = express.Router();

//use allow us to add a new middleware function
router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'..','view','add-product.html'));
}); 
router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;