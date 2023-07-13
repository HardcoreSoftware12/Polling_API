const express = require('express')
const Router = express.Router()

console.log('in roter/js');

Router.use('/v1',require('./v1/index'))

module.exports = Router;