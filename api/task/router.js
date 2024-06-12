// build your `/api/tasks` router here
const db = require('../../data/dbConfig')

function getAll() {
    return db('tasks')
      .join('projects', 'projects.project_id', 'tasks.project_id')
      .select('tasks.*', 'projects.project_name', 'projects.project_description')
}

function create(task) {
    return db('tasks').insert(task)
      .then(([id]) => {
        return db('tasks').where({ task_id: id }).first()
      })
}

module.exports = {
    getAll,
    create
}