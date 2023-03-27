const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
        email: String,
        password: String,
        posts: [
                {
                        title: String,
                        message: String,
                }
        ],
        tokens: [
                {
                        token: String,
                }
        ]

})


const user = new mongoose.model("persioninfos", userSchema);

module.exports = user;