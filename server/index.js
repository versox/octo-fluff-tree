const path = require('path');
const express = require('express');

const app = express();

// var mysql = require('mysql');
/*var con = mysql.createConnection({
  host: "DESKTOP-J3R1J7D",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/

// API endpoints go here!

var activities = [];

// Serve the built client
//app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
// app.get(/^(?!\/api(\/|$))/, (req, res) => {
//     const index = path.resolve(__dirname, '../client/build', 'index.html');
//     console.log("yay");
//     res.sendFile(index);
// });
//


// app.get("/activities", function (req, res) {
//     res.send("hello");
// });

// let server;
// function runServer(port=3001) {
//     return new Promise((resolve, reject) => {
//         server = app.listen(port, () => {
//             resolve();
//         }).on('error', reject);
//     });
// }
//
// function closeServer() {
//     return new Promise((resolve, reject) => {
//         server.close(err => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve();
//         });
//     });
// }
//
// if (require.main === module) {
//     runServer();
// }

module.exports = {
    app
};
