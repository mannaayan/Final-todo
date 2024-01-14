const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    id: {
        type:String,
        require: true
    },
    title : {
        type:String,
        require: true
    },
    desc :{
        type:String,
        require: true
    },
    createdTime :{
        type : Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("todoss",todoSchema);