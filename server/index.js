const express = require("express"); //require express dependency
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt")
const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "password",
    database: "restaurantapp",
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.post("/api/user/get", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const sqlSelect = "SELECT * FROM users WHERE email = ?;"
    db.query(sqlSelect, email, (err, result) => {

        if (err){
            res.send({err:err});
        }
        if (result.length > 0){
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response){
                    res.send(result)
                } else{
                    res.send({message: "Wrong email/password combination"})
                }
            })
        }else{
            res.send({message: "No user with this email"});
        }
    })
})

app.post('/api/user/new', (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) =>{
        if (err){
            console.log(err)
        }
        const sqlInsert = "INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?);"
        db.query(sqlInsert, [firstName, lastName, email, hash], (err, result) => {
            console.log(result);
        })
    })
    
})

app.listen(3001, () => {
    console.log("running on port 3001")
});