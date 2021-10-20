const express = require("express"); //require express dependency
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "password",
    database: "restaurantappdatabase",
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.post('/api/insert', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const username = req.body.username
    const email = req.body.email

    const sqlInsert = "INSERT INTO login (firstName, lastName, username, email) VALUES (?,?,?,?)"
    db.query(sqlInsert, [firstName, lastName, username, email], (err, result) => {
        console.log(result)
    });
});


app.listen(3001, () => {
    console.log("running on port 3001")
});