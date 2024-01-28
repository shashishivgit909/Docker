const express = require("express");

const app = express();

app.use(express.json());


//this is sign up API : data(registration detail of a user)  save  to database which is coming from signUP (react)
app.get("/", (req, res) => {
   res.send({message:"data sent success"});
})


app.listen(5000,()=>{
   console.log(`server is running on port 5000`);
});