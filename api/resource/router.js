// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Resource.getAll()
      .then(resources => {
        res.status(200).json(resources)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' })
      })
})

router.post('/', (req, res) => {
    const resourceData = req.body

    Resource.create(resourceData)
      .then(resource => {
        res.status(201).json(resource)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create resource' })
      })
})

module.exports = router