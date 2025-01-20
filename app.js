//import express
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const adminRoutes = require('./routes/admin')
const shopRoute = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false})) //parse the incoming body, install by using body-parser

app.use(adminRoutes)
app.use(shopRoute)


//when url is wrong or inaccessible
app.use((req, res, next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})
app.listen(3000)