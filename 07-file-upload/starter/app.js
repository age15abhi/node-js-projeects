require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// database
const connectDB = require('./db/connect');

// file - image uploader
const fileUpload =  require('express-fileupload')

// USE v2 in clouinary
const clouinary = require('cloudinary').v2;
clouinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Product router
const productRouter = require('./routes/productRoutes')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// ye middleware res=q.body ki sari req lene ke liye use hota ha
app.use(express.static('./public'))
app.use(express.json())
app.use(fileUpload({useTempFiles:true}))


app.get('/', (req, res) => {
  res.send('<h1>File Upload Starter</h1>');
});

// router path
app.use('/api/v1/products' , productRouter)

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
