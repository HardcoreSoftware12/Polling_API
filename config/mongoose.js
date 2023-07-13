const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Poll_System');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'error connecting to the database'))

db.once('open',()=>{
    console.log('connected successfully to the mongo DB');
})

module.exports = mongoose;