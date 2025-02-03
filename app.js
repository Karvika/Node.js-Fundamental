//import express
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin')
const shopRoute = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false})) //parse the incoming body, install by using body-parser
app.use(express.static(path.join(__dirname,'public'))) //static folder that can be used in html files for rendering
//using filter: when in url it has common path, here '/admin' is common path like '/admin/add-product' and '/admin/product'
app.use('/admin',adminData.routes)
app.use(shopRoute)


//when url is wrong or inaccessible
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  });
app.listen(3000)