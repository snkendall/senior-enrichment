'use strict'
const api = require('express').Router()

api.use('/students', require('./students'))
api.use('/campuses', require('./campuses'))

api.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = api

