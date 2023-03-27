const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/persion").then(() => {
    console.log("Connnection successfully");
}).catch((error) => console.log("database connection failed : " + error))

