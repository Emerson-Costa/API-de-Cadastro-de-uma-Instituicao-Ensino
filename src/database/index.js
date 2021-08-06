const knexfile = require('../../knexfile')
const knex = require('knex') (knexfile.development) // pode ser também knexfile['development'] 

module.exports = knex