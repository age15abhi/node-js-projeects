const express = require('express');
const app = express()

app.get('/' , (req , res) => {
res.status(200).send('Home Page')
})
app.get('/about' , (req , res) => {
res.status(200).send('About Page')
})
app.get('*' , (req , res) => {
res.status(400).send('<h1>Page Not Found</h1>')
})

app.listen(5000 , ()=>{
    console.log('post is listening on 5000.....');
})

// Some methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

