
const dotenv = require('dotenv');
const express = require('express')
const MediaController = require('./Controller/MediaController')
const UserController = require('./Controller/UserController')
const app = express()
const mongoose = require('mongoose')
dotenv.config()



const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 1800


const {json} = require('body-parser')
var cors = require('cors');
app.use(json());
app.use(cors())

// base route
app.use("/media/", MediaController);
app.use("/user/", UserController);

// starting the server function
const start = async () => {

    // mongoose connection
    mongoose.Promise = global.Promise;
    await mongoose.connect(MONGODB_URI);

    
    app.listen(PORT , async () => {
        console.log(`Server Connected To Port: ${PORT}`)
        
    });

};

start()
