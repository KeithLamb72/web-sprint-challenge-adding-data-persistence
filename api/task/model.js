// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll() {
  return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select(
      'tasks.id as task_id',
      'tasks.task_description',
      'tasks.task_notes',
      'tasks.task_completed',
      'projects.project_name',
      'projects.project_description'
    )
}

function create(task) {
  return db('tasks').insert(task)
    .then(([id]) => getById(id))
}

function getById(id) {
  return db('tasks').where({ id }).first()
}

module.exports = {
  getAll,
  create,
  getById
}