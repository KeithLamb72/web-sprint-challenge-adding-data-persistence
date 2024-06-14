// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll() {
  return db('resources')
}

function create(resource) {
  return db('resources').insert(resource)
    .then(([id]) => {
      console.log('Inserted resource ID:', id); // Log inserted ID
      return getById(id);
    })
    .catch(err => {
      console.error('Error inserting resource:', err);
      throw err;
    });
}

function getById(id) {
  return db('resources').where({ resource_id: id }).first()
}

module.exports = {
  getAll,
  create,
  getById
}