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

// curl -H "Content-Type: application/json" -X PUT -d '{"name":"HighSchoolHigh","image":"REALbad"}' http://localhost:1337/api/campuses

//Create a new campus
api.post('/', (req, res, next) => {
    Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

//Update a campus
api.put('/1', (req, res, next) => {
    //const campusId = req.body.params.campusId;
    // Campus.findAll({
    //     where: {
    //         id: 1
    //     }
    // })

    ///STUCK HEREEEEE
    req.campus.update(req.body)
    .then(campus => campus.update({ updateInfo }))
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
