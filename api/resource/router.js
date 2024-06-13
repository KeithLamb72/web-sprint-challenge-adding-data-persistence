// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const resources = await Resources.getAll()
    res.status(200).json(resources)
  } catch (err) {
    res.status(500).json({ message: 'Failed to get resources' })
  }
})

router.post('/', async (req, res) => {
  const resourceData = req.body

  if (!resourceData.resource_name) {
    return res.status(400).json({ message: 'Resource name is required' })
  }

  try {
    const newResource = await Resources.create(resourceData)
    res.status(201).json(newResource)
  } catch (err) {
    res.status(500).json({ message: 'Failed to create resource' })
  }
})

module.exports = router