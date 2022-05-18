const express = require("express");
const config = require("./word");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const app = express();

let connection = mysql.createConnection(config);

app.use(bodyparser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/dict.html");
})

app.get("/css", function (req, res) {
    res.sendFile(__dirname + "/dict.css");
})

app.get("/jquery", function (req, res) {
    res.sendFile(__dirname + "/jQuery.js");
})

app.get("/dict", function (req, res) {
    res.sendFile(__dirname + "/dict.js");
})

app.get("/search", function (req, res) {
    let valueofsearch = req.query.searchterma;

    let sql = `select * from entries.entries WHERE word='${valueofsearch}';`

    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json({
            status: 200,
            data: results,
        });
    });

})


// app.post("/", function(req, res){
//     let searchterm = req.body.searchterm;
//     res.send("sent from dictionary " + searchterm);
// })

app.listen(3000, function () {
    console.log("server started on PORT 3000");
})