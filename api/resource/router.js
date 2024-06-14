// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const resources = await Resources.getAll()
    res.status(200).json(resources)
  } catch (err) {
    console.error('Error getting resources:', err)
    res.status(500).json({ message: 'Failed to get resources' })
  }
})

router.post('/', async (req, res) => {
  const resourceData = req.body

  if (!resourceData.resource_name) {
    return res.status(400).json({ message: 'Resource name is required' })
  }

  try {
    console.log('Resource data to be inserted:', resourceData) // Log the resource data being inserted
    const newResource = await Resources.create(resourceData)
    console.log('Newly created resource:', newResource) // Log the newly created resource
    if (!newResource) {
      throw new Error('Resource creation failed')
    }
    res.status(201).json(newResource)
  } catch (err) {
    console.error('Error creating resource:', err)
    res.status(500).json({ message: 'Failed to create resource' })
  }
})


module.exports = router