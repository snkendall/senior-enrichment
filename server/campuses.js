const api = require('express').Router()
const db = require('../db')
const {Campus} = require('../db/models')

module.exports = api;

//Navigate to pages
api.get('/:campusId', (req, res, next) => {
	const campusId = req.body.params.campusId
	Campus.findAll({
		where: {
			id: campusId
		}
	})
	.then(campuses => res.json({campuses}))
	.catch(next)
})

api.get('/', (req, res, next) => {
	Campus.findAll()
	.then(campuses => res.json({campuses}))
	.catch(next)
})

//Create a new campus
api.post('/', (req, res, next) => {
    Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

//Update a campus
api.put('/:campusId', (req, res, next) => {
    const campusId = req.body.params.campusId;
    Campus.findOne({
        where: {
            id: campusId
        }
    })
    .then(campus => campus.update(req.body))
    .then(campus => res.json(campus))
    .catch(next)
})

//Delete a campus
api.delete('/:campusId', (req, res, next) => {
    const campusId = req.body.params.campusId;
    Campus.destroy({
        where: {
            id: campusId
        }
    })
    .then(() => res.status(204).end())
    .catch(next);
})
