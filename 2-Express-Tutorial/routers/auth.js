const express = require('express');
const router = express.Router()


//post method this is for the index.html file
router.post('/', (req, res) => {
    console.log(req.body)
    // res.send('Post Successfully')
    const { name } = req.body
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    }
    else {
        res.status(401).send('please enter the name ....')
    }

})

module.exports = router
