const api = require('express').Router()
const db = require('../db')
const {Student} = require('../db/models')

//Navigate to students
api.get('/students/:studentId', (req, res, next) => {
    const studentId = req.body.params.studentId;
    Student.findAll({
        where: {
            id: studentId
        }
    })
    .then(students => res.json({students}))
    .catch(next)
})

api.get('/students', (req, res, next) => {
    Student.findAll()
    .then(students => res.json({students}))
    .catch(next)
})

//Create students
api.post('/students', (req, res, next) => {
    Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

//Update students
api.put('/students/:studentId', (req, res, next) => {
    const studentId = req.body.params.studentId;
    const updateInfo = req.body.data
    Student.findOne({
        where: {
            id: studentId
        }
    })
    .then(student => student.update({ updateInfo }))
    .then(student => res.json(student))
    .catch(next)
})

//Delete a student
api.delete('/students/:studentId', (req, res, next) => {
    const studentId = req.body.params.studentId;
    Student.destroy({
        where: {
            id: studentId
        }
    })
    .then(() => res.status(204).end())
    .catch(next);
})
