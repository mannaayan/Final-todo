require('dotenv').config();

const dev = {
    app:{
        PORT : process.env.PORT || 5042,

    },
    db: {
        url : process.env.DBURL || 'mongodb://localhost:27017/FinalsTodos'
    }
}

module.exports = dev;