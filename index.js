const express = require("express");

const app = express();

app.use(express.json());


//this is sign up API : data(registration detail of a user)  save  to database which is coming from signUP (react)
app.post("register", async (req, res) => {
   res.status(200).json({result:"user registered success"});
})


app.listen(5000);