const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({ products, Total_result: products.length })
}


const getAllProducts = async (req, res) => {
    const { featured, company, name, sort , fields , numericFilters } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }

    if (company) {
        queryObject.company = company
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    // Numeric Filter
    if(numericFilters){
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }

        const regEx = /\b(<|>|>=|=|<=)\b/g
        let filters = numericFilters.replace(regEx , (match)=>
            `-${operatorMap[match]}-`)
        
            const options = ['price' , 'rating'];
            filters = filters.split(',').forEach((item)=>{
                const [field , operator , value] = item.split('-')
                if(options.includes(field)){
                    queryObject[field] = {[operator]:Number(value)}
                }
            })
    }
    console.log(queryObject)


    // console.log(sort)
    // Sorting and searching(select) the product
    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }
    else{
        result = result.sort('createdAt')
    }

    if(fields){
        const filedsList = fields.split(',').join(' ')
        result = result.select(filedsList)
    }

    // pagr or Limit and skiping the products
const page = Number(req.query.page) || 1
const limit = Number(req.query.limit) || 10
// skip logic
const skip = (page-1)*limit
// product 23 limit 7 --- page- 4 -7 7 7 2

result = result.skip(skip).limit(limit)




    const products = await result
    res.status(200).json({ products, Total_result: products.length })
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
}

