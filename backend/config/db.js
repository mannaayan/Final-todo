const mongoose = require('mongoose');

const config = require('./config');

const dbURl = config.db.url;

//connecting to database
mongoose.connect(dbURl).then(()=>{
        console.log('Mongodb is Connected');
    
    }).catch((error)=>{
        console.log(error);
        process.exit(1);
    })