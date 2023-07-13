const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const app = express()

// app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))


// app.use(bodyParser.urlencoded({extended:true}))
const db = require('./config/mongoose')
app.use('/',require('./routes/index'))












app.listen(port,(err)=>{
    if(err){
        console.log('error starting the server')
        return
    }
    console.log('server is running at port',port);
    console.log(__dirname);


});






