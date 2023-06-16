const express = require('express');
const app = express()
const logger = require('./10_logger')
const authorize = require('./authorize');

// req => middleware => res



//use the middleware with the help of app.use method
// we create another file name logger.js
//module.export it and require in app.js and then use app.js to use this logger for all the app.get requests

app.use([logger , authorize])

// Note in this the the order is matter the the get  request are come in order wise


app.get('/' ,(req , res)=>{
    res.send('Home Page')
    console.log(req.query)

})

app.get('/about' ,   (req , res)=>{
    res.send('About Page')

})

app.get('/api/product' , (req , res)=>{
    res.send('api products')

})

app.get('/api/items' , [logger , authorize] ,   (req , res)=>{
    res.send('api items')

})



app.listen(5000 , ()=>{
    console.log('port is listening on 5000');
})

