const api = require('express').Router()
const db = require('../db')
const {Campus} = require('../db/models')

module.exports = api;

//Navigate to singe campus pages
api.get('/:campusId', (req, res, next) => {
	const campusId = req.body.params.campusId
	Campus.findAll({
		where: {
			id: campusId
		}
	})
	.then(campus => res.json({campus}))
	.catch(next)
})

//Navigate to all campuses page
api.get('/', (req, res, next) => {
	Campus.findAll()
	.then(campuses => res.json({campuses}))
	.catch(next)
})

//curl -H "Content-Type: application/json" -X POST -d '{"name":"Uranus","image":"http://tbacontks.weebly.com/uploads/1/1/1/1/11113749/9399660.png?220"}' http://localhost:1337/api/campuses
//curl -H "Content-Type: application/json" -X POST -d '{"name":"Mars","image":"http://tbacontks.weebly.com/uploads/1/1/1/1/11113749/5133215.png?213"}' http://localhost:1337/api/campuses 
//curl -H "Content-Type: application/json" -X POST -d '{"name":"Jupiter","image":"http://tbacontks.weebly.com/uploads/1/1/1/1/11113749/4987312.png?207"}' http://localhost:1337/api/campuses

//Create a new campus
api.post('/', (req, res, next) => {
    Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

//Update a campus
api.put('/:campusId', (req, res, next) => {
    const campusId = req.params.campusId;
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
    const campusId = req.params.campusId;
    Campus.destroy({
        where: {
            id: campusId
        }
    })
    .then(() => res.status(204).end())
    .catch(next);
})
