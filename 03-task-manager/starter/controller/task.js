
const { reset } = require('nodemon')
const Task = require('../models/task')
const {createCustomError} = require('../errors/custom-error')
const asyncWrapper = require('../middleware/async')


const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({})
    res.status(200).json({ tasks })

})

const createTasks = asyncWrapper (async (req, res) => {

        const task = await Task.create(req.body)
        res.status(201).json({ task })
    

})

const getTasks = asyncWrapper (async (req, res) => {

        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`,404))
        }

        res.status(200).json({ task })
    

})


const deleteTasks = asyncWrapper( async (req, res) => {
   
        const { id: taskID } = req.params
        const tasks = await Task.findOneAndDelete({ _id: taskID })

        if (!tasks) {
            return res.status(404).json({ msg: `NO task to delete with ID : ${taskID}` })
        }

        res.status(200).json({ tasks })
        // res.status(200).send()
        // res.status(200).json({task: null , status:'success'})
    
})



const updateTasks = asyncWrapper( async (req, res) => {
    
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`,404))
        }

        res.status(200).json({ task })


    
})



module.exports = {
    getAllTasks, createTasks, getTasks, updateTasks, deleteTasks
}