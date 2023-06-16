const express = require('express');
const app = express()

// req => middleware => res

const logger = ( req , res , next) =>{
const method = req.method
const url = req.url
const time = new Date().getFullYear
console.log(method , url , time);
}




app.get('/' , logger , (req , res)=>{
    res.send('Home Page')

})

app.listen(5000 , ()=>{
    console.log('port is listening on 5000');
})
