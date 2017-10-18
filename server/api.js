'use strict'
const api = require('express').Router()
const db = require('../db')
//const {Student, Campus} = require('../db/models')


api.use('/students', require('./students'))
api.use('/campuses', require('./campuses'))
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
//api.get('/hello', (req, res) => res.send({hello: 'world'}))


module.exports = api
// Navigation: as a user I...

// will land on Home by default
// can navigate to Campuses from Home
// can navigate to Students from Home
// can navigate to view a Single Campus from Campuses
// can navigate to view a Single Student from Students
// can navigate to view a Single Student from Single Campus (for any student at that campus)
// can navigate to view that student's Single Campus from Single Student
