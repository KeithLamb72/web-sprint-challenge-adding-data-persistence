// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.getAll()
    const formattedTasks = tasks.map(task => ({
      ...task,
      task_completed: Boolean(task.task_completed)
    }))
    res.status(200).json(formattedTasks)
  } catch (err) {
    res.status(500).json({ message: 'Failed to get tasks' })
  }
})

router.post('/', async (req, res) => {
  const taskData = req.body

  if (!taskData.task_description || !taskData.project_id) {
    return res.status(400).json({ message: 'Task description and project ID are required' })
  }

  try {
    const newTask = await Tasks.create(taskData)
    res.status(201).json({
      ...newTask,
      task_completed: Boolean(newTask.task_completed)
    })
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task' })
  }
})

module.exports = router