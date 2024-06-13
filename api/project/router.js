// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.find()
    const formattedProjects = projects.map(project => ({
      ...project,
      project_completed: Boolean(project.project_completed)
    }))
    res.status(200).json(formattedProjects)
  } catch (err) {
    res.status(500).json({ message: 'Failed to get projects' })
  }
})

router.post('/', async (req, res) => {
  try {
    const project = await Projects.create(req.body)
    res.status(201).json({
      ...project,
      project_completed: Boolean(project.project_completed)
    })
  } catch (err) {
    res.status(500).json({ message: 'Failed to create project' })
  }
})

module.exports = router
