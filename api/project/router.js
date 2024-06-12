// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Project.getAll()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects'})
    })
})

router.post('/', (req, res) => {
    const projectData = req.body

    Project.create(projectData)
      .then(project => {
         res.status(201).json(project)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create project' })
        })
})

module.exports = router