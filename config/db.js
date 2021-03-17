const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const conectarDB = async() => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD connected');
    } catch (error) {
        process.exit(1); //Detenemos la app
    }

}

module.exports = conectarDB;