const express = require('express');
const app = express()


// Hoe to makke your oen api 
app.get('/' , (req , res)=>{

    res.json([{name : 'abhi'} , {name: 'john'}])

})


app.listen(5000,()=>{
    console.log('Port is listening on 5000....');
})
