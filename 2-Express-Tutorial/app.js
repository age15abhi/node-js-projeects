const { response } = require('express');
const express = require('express');
const { reset } = require('nodemon');
const app = express()

const people = require('./routers/public')
const auth = require('./routers/auth')

// Static assessts
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

//
app.use('/api/people' , people)
app.use('/login' , auth)





// server listening method
app.listen(5000, () => {
    console.log('port is listening on 5000');
}) 
