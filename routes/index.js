const express = require('express')
const Router = express.Router()

console.log('Roter loaded')
// console.log('roter',__dirname);


Router.use('/api',require('./api/index'))

module.exports = Router;