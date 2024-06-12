// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Task.getAll()
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' })
      })
})

router.post('/', (req, res) => {
    const taskData = req.body

    Task.create(taskData)
      .then(task => {
        res.status(201).json(task)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create task'})
      })
})

module.exports = router