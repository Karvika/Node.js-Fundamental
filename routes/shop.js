const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

// router.get('/', (req, res, next) => {
//     // console.log('shop.js', adminData.products);
//     // // can't use directly path like ./view/shop.html as it takes root folder of OS not the given directory
//     // res.sendFile(path.join(rootDir, 'view', 'shop.html'));
//     const products = adminData.products
//     res.render('shop',{prods: products}) //uses shop.pug because we have defined it in app.js
//   });
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});
module.exports = router