const express = require('express');
const router = express.Router();

const { getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks }
    = require('../controller/task')

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)



module.exports = router

