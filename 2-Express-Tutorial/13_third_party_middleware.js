const express = require('express');
const app = express()
const morgan = require('morgan');
const logger = require('./10_logger')
const authorize = require('./authorize');

// req => middleware => res



// How to use third part middleware

// app.use([logger , authorize])

app.use(morgan('tiny'))


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
