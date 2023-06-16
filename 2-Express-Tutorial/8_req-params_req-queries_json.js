const express = require('express');
const app = express()
const { products } = require('./data')


// Hoe to makke your oen api 
app.get('/', (req, res) => {

    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')

})

// bunch of product
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

// to access single product from the api
// product params 
app.get('/api/products/:productID', (req, res) => {
// console.log(req)
console.log(req.params)
    const { productID } = req.params
    const singleProducts = products.find((product) => product.id === Number(productID)
    )
    if (!singleProducts) {
        res.send('<h1>Product Not Found</h1>')
    }
    res.json(singleProducts)

})

// Review Params
app.get('/api/products/review/:reviewID' , (req , res)=>{
    console.log(req.params);
    res.send('hello world')
})




// requesting for the queries
app.get('/api/v1/query' , (req , res)=>{
    console.log(req.query);
    const {search , limit} = req.query
    let sortedProduct = [...products]
    

    // searching for the query is given by the user
    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    // limit the products on the basis of the user given to us
    if(limit){
        sortedProduct = sortedProduct.slice(0 , Number(limit))
       return res.status(200).json(sortedProduct)
    }

    // if the length of the product is less than 1 when the user gives us 
    // searcha and limit
    if(sortedProduct.length <1){
    //   return  res.status(200).send('No product is match in the list')
      return   res.status(200).json({success:true , data: []}) 
    }

    // else is for the user not given the search and limit query
    else{
        res.json(products)
    }
})



app.listen(5000, () => {
    console.log('Port is listening on 5000....');
})
