const express = require('express');
const app = express()
const {products} = require('./data')

app.get('')


// Hoe to makke your oen api 
app.get('/' , (req , res)=>{

    res.json(products)

})


app.listen(5000,()=>{
    console.log('Port is listening on 5000....');
})
