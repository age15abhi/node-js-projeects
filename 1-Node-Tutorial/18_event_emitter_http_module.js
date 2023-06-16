const http = require('http');
const { reset } = require('nodemon');

// const server = http.createServer((req , res)=>{
//     res.end('Hello world')
// })



// Using Event Emitter Api
const server = http.createServer()

// emit request event 
// subscribe to it / listen to it / respond to it
server.on('request' , (req , res)=>{
res.end('Welcome')

})


server.listen(5000)