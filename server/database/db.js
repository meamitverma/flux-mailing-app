const mongoose = require('mongoose')

const Connection = () => {
    const DB_URI = process.env.DB_URI;
    try {
        mongoose.connect(DB_URI);
        console.log("Datatbase Connected Successfully!");
    }
    catch (e) {
        console.log("Error connecting the database", e);
    }
}

module.exports = Connection