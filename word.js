// var mysql = require('mysql');

var con = {
    host: "localhost",
    user: "root",
    password: "grootgroot"
};

// con.connect(function (err) {
//     if (err) throw err;
//     con.query("select * from entries.entries WHERE word='king';", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

module.exports = con;