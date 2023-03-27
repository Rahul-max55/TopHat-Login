const express = require('express');
const app = express();
const jwtToken = require("jsonwebtoken");
const cors = require("cors");

// database connection
require("./db/databaseConn");
const user = require("./model/schema");

app.use(express.json());
app.use(cors())


app.post("/register", (req, res) => {
    try {
        console.log(req.body.email);
        const { email, password } = req.body;
        console.log(email);
        // user.findOne({ email }).then((resolve) => {
        //     if (resolve) { res.send("email alerdy registered") }
        // })

        const document = new user({ email, password });
        document.save().then((resolve) => res.send("dataEnter successfuly")).catch((err) => console.log("Error is ocuured in data Passing" + err));

    } catch (err) {
        console.log("registration error" + err);
        res.send("data does not submit" + err);
    }
})


app.post("/login",async (req, res) => {
    
    try {
        const { email, password } = req.body;
        user.findOne({ email }).then((val) => {
            if (val.password.toString() === password) {

                const token = jwtToken.sign(val._id.toString(), "Projectcreatedinmernstack")
                res.cookie("jwt", token);

                val.tokens = val.tokens.concat({token});
                val.save().then(() => console.log("success")).catch((err) => { console.log("failed")+err })
                res.status(200).send("login successfully");
            }
            // res.status(404).send("Invalid Credantials")
        })
    } catch (err) {
        res.status(404).send("error in login" + err)
    }
})


app.post('/postSave', (req, res) => {
    try {
        const { title, message } = req.body
        console.log(title,message);
        // const idVal = localStorage.getItem("idVal");
        user.findOne({ _id: "6421748adb2593159a0c7047" }).then((resolve) => {
            resolve.posts = resolve.posts.concat({ title, message });
            resolve.save().then(() => console.log("success")).catch((err) => { console.log("failed")+err })
            res.status(200).send("data Added succesfuly");
        })
    } catch (err) {
        console.log(err);
    }
})




app.listen("8000",  () => {
    console.log("server Started successfuly");
})


