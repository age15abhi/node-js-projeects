const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'))

// app.get('/' , (req , res)=>{
// res.sendFile(path.join(__dirname , './navbar-app/index.html'))
//  Other Method -  Adding a static asset - index.html file ko bhi public folder me dal dena ha
// other method - using SSR - Server Side rendering
// })


app.get('*' , (req , res)=>{
res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5000 , ()=>{
    console.log('post is listening on 5000');
})






