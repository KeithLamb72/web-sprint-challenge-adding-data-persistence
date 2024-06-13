// build your `Project` model here
const db = require('../../data/dbConfig')

function find() {
  return db('projects');
}

function findById(id) {
  return db('projects').where({ id }).first();
}

function create(project) {
  return db('projects').insert(project).then(([id]) => findById(id));
}

module.exports = {
  find,
  findById,
  create,
}