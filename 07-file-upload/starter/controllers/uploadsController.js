const path = require('path');
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const cloudinary = require('cloudinary').v2;
const fs = require('fs');


const uploadProductImageLocal = async (req, res) => {
  // check if the file exist
  // check format
  // check size

  // file does not exist
  if (!req.files) {
    throw new CustomError.BadRequestError('No file uploaded')
  }
  const productImage = req.files.image;

  // format
  if (!productImage.mimetype.startsWith('image')) {

  }

  // image size restrict
  const maxSize = 1024 * 1024
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError('Please Upload Image smaller than 1MB')
  }
  const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`)


  // this means move the product image to the the path i given 
  await productImage.mv(imagePath);
  return res.status(StatusCodes.OK).json({ image: { src: `/uploads/${productImage.name}` } })
}



// Upload the image on the cloud ----- use in the production in real company
const uploadProductImage = async (req, res) => {
  
  const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
    use_filename: true,
    folder: 'file-upload',
  }
  );
  fs.unlinkSync(req.files.image.tempFilePath)
  return res.status(StatusCodes.OK).json({ image: { srrc: result.secure_url } })
}




module.exports = {
  uploadProductImage,
}