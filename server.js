const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
const url = req.url
method = req.method
if(url==='/'){
res.write('<html>')
res.write('<head><title>Enter a message!!</title></head>')
res.write('<body><form action = "/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
res.write('</html>')
return res.end()
}
// process.exit()// exit from request
if(url==='/message' && method==='POST')
{
    const body = []
    req.on('data',(chunk)=>{
        //request comes in chunks
        console.log(chunk)
        //get all the chunks in body
        body.push(chunk)
    })
    req.on('end',()=>{
        //parse the body
        const parsedBody = Buffer.concat(body).toString()
        console.log(parsedBody)
        const message = parsedBody.split('=')[1]
        console.log(message)
        fs.writeFileSync('message.txt',message)

    })
    // we want to redirect to '/'
    res.statusCode = 302
    res.setHeader('Location','/')
    return res.end()

}
res.setHeader('Content-Type', 'text/html')
res.write('<html>')
res.write('<head><title>My first page</title></head>')
res.write('<body><h1>Hello from my Node.js!</h1></body>')
res.write('</html>')
res.end()
}
)

server.listen(3000)

