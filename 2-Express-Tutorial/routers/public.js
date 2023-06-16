const express = require('express');
const router = express.Router();

const { people } = require('../data');




//get method
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

//post method if name is not provided 
//this post method is for javascript.html
router.post('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide the value' })

    }
    else {
        res.status(201).json({ success: true, person: name })
    }
})


//postman method
router.post('/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide the value' })

    }
    else {
        res.status(201).json({ success: true, data: [...people, name] })
    }
})





// Put method - for update the value
// we use put method to update the value of the person which is api data.js

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)

    //if person id not match with params id
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        res.status(404).json({ success: false, msg: `there is no person with id ${id}` })
    }
    // else person id match with params id so return the following response
    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPerson })

})


// Delete method - for delte the value
router.delete('/:id', (req, res) => {

    console.log(req.params)
    const person = people.find((person) => person.id === Number(req.params.id))

    if (!person) {
        res.status(400).json({ success: false, msg: `no person match with the id ${req.params.id}` })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))

    return res.status(200).json({ success: true, data: newPeople })

})

module.exports = router