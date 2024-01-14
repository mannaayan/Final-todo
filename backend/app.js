const express = require('express');
const cors = require('cors');
require("./config/db");



const todoRouters = require('./routes/todos.route');




const app = express();


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.use(todoRouters);

app.get('/',(req,res)=>{
    res.send('Welcome Todo Application!');
})




//For Different Routes
app.use((req,res,next)=>{
     
    res.status(201).json({
        message: 'Route is Not Found'
    });
});
//For Server Error
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({
        message: 'server Error',
        
    })
})




module.exports = app;