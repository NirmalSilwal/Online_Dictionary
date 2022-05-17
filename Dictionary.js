const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/dict.html");
})

app.post("/", function(req, res){
    let searchterm = req.body.searchterm;

    res.send("sent from dictionary " + searchterm);
})

app.listen(3000, function () {
    console.log("server started on PORT 3000");
})