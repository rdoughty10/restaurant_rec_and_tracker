const express = require("express"); //require express dependency
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt")
const saltRounds = 10;
const cookieParser = require("cookie-parser")
const session = require("express-session")

const db = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "password",
    database: "restaurantapp",
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3000/login", "http://localhost:3000/sign-in"],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser())
app.use(session({
    key: "userId",
    secret: "soup",
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60*60*24*1000,
    }
}))

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
                    req.session.user = result
                    console.log(req.session.user)
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

app.get("/api/user/logout", (req, res) => {
    if (req.session.user){
        req.session.destroy()
        res.send({loggedIn: false})
    }
})

app.get('/api/user/get', (req, res) => {
    if (req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

app.post('/api/user/new', (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;


    const sqlCheck = "SELECT * FROM users WHERE email = ?"
    db.query(sqlCheck, email, (err, result) => {

        if (err){
            res.send({err:err});
        }else if (firstName == '' || lastName == '' || email =='' || password == ''){
            res.send({message: "One or more of the required fields is empty"})
        }else if (result.length > 0){
            res.send({message: "This email already has an account"})
        }else{
            bcrypt.hash(password, saltRounds, (err, hash) =>{
                if (err){
                    console.log(err)
                }
                const sqlInsert = "INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?);"
                db.query(sqlInsert, [firstName, lastName, email, hash], (err, result) => {
                    console.log(result);
                    res.send({message: "Your account has been created. Welcome, " + firstName + " " + lastName})
                })
            })
        }
    })
});


app.post('/api/reviews/new', (req, res) => {

    const userID = req.body.userID;
    const restaurantName = req.body.restaurantName;
    const restaurantLat = req.body.restaurantLat;
    const restaurantLng = req.body.restaurantLng;
    const rating = req.body.rating;
    const review = req.body.review;

    const sqlInsert = "INSERT INTO reviews (userID, restaurantName, restaurantLat, restaurantLng, rating, review) VALUES (?,?,?,?,?,?);"
    if (userID == null){
        res.send({message: "You must be logged in to submit a review"})
    }else{
        db.query(sqlInsert, [userID, restaurantName, restaurantLat, restaurantLng, rating, review], (err, result) => {
            if (err){
                console.log(err)
            }else{
                console.log(result);
                res.send({message: "Your review has been created"})
            }
        })
    }
            
});

app.listen(3001, () => {
    console.log("running on port 3001")
});