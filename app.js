const http = require('http')

//import express
const express = require('express')

const app = express()
//use allow us to add a new middleware function
app.use((req, res, next)=>{
    console.log("In the middleware");
    next();   // allows the request to continue with the next middleware in line
}) 
app.use((req, res, next)=>{
    console.log("In the another middleware");
    res.send('<h1> Hello from Express! </h1>');
}) 
const server = http.createServer(app);
server.listen(3000)