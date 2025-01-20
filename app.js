const http = require('http')

//import express
const express = require('express')

const app = express()
//use allow us to add a new middleware function
app.use("/add-product",(req, res, next)=>{
    console.log("On the product page");
    res.send('<h1> Hello from Product! </h1>');
}) 
app.use("/",(req, res, next)=>{
    console.log("In the middleware");
    res.send('<h1> Hello from Express! </h1>');
}) 
const server = http.createServer(app);
server.listen(3000)