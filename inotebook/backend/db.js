const mongoose= require('mongoose');

// const mongoURI= "mongodb://localhost:27017" // URI address from mongodb compass, you can use this or bellow, but use bellow.
const mongoURI= "mongodb://127.0.0.1:27017/inotebook" // URI address from mongodb compass
// in the above address we entered /inotebook so the MongoDB will create new collection which will be inotebook named.

// bellow is the function to connect mongodb
const connectToMongo = () => {
    mongoose.connect(mongoURI,
    console.log("connected to mongo successfully Doremon")
    )
    }

    // bellow we exported the connectToMongo named function to the other like index.js
module.exports = connectToMongo;