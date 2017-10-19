const api = require('express').Router()
const db = require('../db')
const {Students} = require('../db/models')

module.exports = api;

//Navigate to a single student
api.get('/:studentId', (req, res, next) => {
    const studentId = req.body.params.studentId;
    Students.findAll({
        where: {
            id: studentId
        }
    })
    .then(students => res.json({students}))
    .catch(next)
})

//Navigate to all students
api.get('/', (req, res, next) => {
    Students.findAll()
    .then(students => res.json({students}))
    .catch(next)
})

// curl -H "Content-Type: application/json" -X POST -d '{"name":"Ashi","email":"ashi@ashi.io","image":"https://cloud.fullstackacademy.com/ashi.jpg?mtime=20160613103128"}' http://localhost:1337/api/students
// curl -H "Content-Type: application/json" -X POST -d '{"name":"Emily","email":"emily@ylime.com","image":"https://pbs.twimg.com/profile_images/703752189332889601/qHrbU_gg.jpg"}' http://localhost:1337/api/students
// curl -H "Content-Type: application/json" -X POST -d '{"name":"Karen","email":"karen@foundations.com","image":"https://cloud.fullstackacademy.com/Karen-M.jpg?mtime=20160511113353"}' http://localhost:1337/api/students

//Create students
api.post('/', (req, res, next) => {
    Students.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

//Update students
api.put('/:studentId', (req, res, next) => {
   const studentId = req.params.studentId;
    Students.findOne({
        where: {
            id: studentId
        }
    })
    .then(student => student.update(req.body))
    .then(student => res.json(student))
    .catch(next)
})

//Delete a student
api.delete('/:studentId', (req, res, next) => {
    const studentId = req.params.studentId;
    Students.destroy({
        where: {
            id: studentId
        }
    })
    .then(() => res.status(204).end())
    .catch(next);
})
