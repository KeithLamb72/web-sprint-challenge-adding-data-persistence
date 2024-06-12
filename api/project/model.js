// build your `Project` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('projects')
}

function create(project) {
    return db('projects').insert(project)
        .then(([id]) => {
            return db('projects').where({ project_id: id }).first()
        })
}

module.exports ={
    getAll,
    create
}