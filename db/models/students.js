const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('students', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    }
})
