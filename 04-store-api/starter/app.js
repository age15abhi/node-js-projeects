  require('dotenv').config()
//async error
require('express-async-errors')
// express module
const express = require('express');
const app = express()
// custom error module
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
// connect db module
const connectDB = require('./db/connect')
// connect to router module
const productsRouter = require('./routes/products')

// middleware
app.use(express.json())

// routes

app.get('/' , (req , res) => {
    res.send('<h1>Store Api</h1><a href="/api/v1/products">Product api</a>')
})

app.use('/api/v1/products' ,productsRouter )


// products route

// globally use of custom error module
app.use(notFoundMiddleware)
app.use(errorMiddleware)

// port
const port = process.env.PORT || 3000



// start function
const start = async()=>{
  try {
    //connect db
await connectDB(process.env.MONGO_URI)
    app.listen(port , console.log(`port is listening on ${port}...`))
  } catch (error) {
    console.log(error)
  }

}


start()
