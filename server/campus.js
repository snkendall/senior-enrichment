const api = require('express').Router()
const db = require('../db')
const {Campus} = require('../db/models')

//Navigate to pages
api.get('/campuses/:campusId', (req, res, next) => {
	const campusId = req.body.params.campusId
	Campus.findAll({
		where: {
			id: campusId
		}
	})
	.then(campuses => res.json({campuses}))
	.catch(next)
})

api.get('/campuses', (req, res, next) => {
	Campus.findAll()
	.then(campuses => res.json({campuses}))
	.catch(next)
})

//Create a new campus
api.post('/campuses', (req, res, next) => {
    Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

//Update a campus
api.put('/campuses/:campusId', (req, res, next) => {
    const campusId = req.body.params.campusId;
    const updateInfo = req.body.data
    Campus.findOne({
        where: {
            id: campusId
        }
    })
    .then(campus => campus.update({ updateInfo }))
    .then(campus => res.json(campus))
    .catch(next)
})

//Delete a campus
api.delete('/campuses/:campusId', (req, res, next) => {
    const campusId = req.body.params.campusId;
    Campus.destroy({
        where: {
            id: campusId
        }
    })
    .then(() => res.status(204).end())
    .catch(next);
})
