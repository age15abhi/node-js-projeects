// // EX -1 
// const {readFile} = require('fs')

// console.log('i am starting reading the file')

// readFile('./content/first.txt' , 'utf8' , (err , result)=>{
//     // check file path
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log('the task is completed')
// })

// console.log('starting the new task');



// Ex-2 setTimeout 

// console.log(' first')
// setTimeout(()=>{
//     console.log('second')
// }, 0)
// console.log('third')


// Ex -2 SetIntervel
// setInterval(() => {
//     console.log('hello world')

// }, 2000);

// console.log('i am done first');







// Ex - 3   Http module
const http = require('http')

const server = http.createServer((req , res)=>{
    console.log('request event')
    res.end('Hello world')
})

server.listen(5000, () => {
    console.log('server is listening on port : 5000')
})