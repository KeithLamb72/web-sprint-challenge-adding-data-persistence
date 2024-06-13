// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll() {
  return db('resources')
}

function create(resource) {
  return db('resources').insert(resource)
    .then(([id]) => getById(id))
}

function getById(id) {
  return db('resources').where({ id }).first()
}

module.exports = {
  getAll,
  create,
  getById
}