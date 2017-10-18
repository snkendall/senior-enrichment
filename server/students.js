const api = require('express').Router()
const db = require('../db')
const {Student} = require('../db/models')

module.exports = api;

//Navigate to students
api.get('/:studentId', (req, res, next) => {
    const studentId = req.body.params.studentId;
    Student.findAll({
        where: {
            id: studentId
        }
    })
    .then(students => res.json({students}))
    .catch(next)
})

api.get('/', (req, res, next) => {
    Student.findAll()
    .then(students => res.json({students}))
    .catch(next)
})

// curl -H "Content-Type: application/json" -X DELETE -d '{"name":"kateTheGREAT","email":"1234@aol.com"}' http://localhost:1337/api/students/1

//Create students
api.post('/', (req, res, next) => {
    Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

//Update students
api.put('/:studentId', (req, res, next) => {
   const studentId = req.body.params.studentId;
    Student.findOne({
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
    const studentId = req.body.params.studentId;
    Student.destroy({
        where: {
            id: studentId
        }
    })
    .then(() => res.status(204).end())
    .catch(next);
})
