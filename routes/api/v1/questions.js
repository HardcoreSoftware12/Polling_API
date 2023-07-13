const express=require('express')
const Router=express.Router()
// console.log("this",__dirname);
const questionsController = require('../../../controller/questionsController')


Router.post('/create',questionsController.create)
Router.get('/show/:qid',questionsController.show)
Router.delete('/delete/:id',questionsController.delete)

Router.use('/options',require('./options'))









module.exports=Router