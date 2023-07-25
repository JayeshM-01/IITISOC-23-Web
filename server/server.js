const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"," DELETE","PUT"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "employeesystem",
});

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 10000000 * 60 * 60 * 24,
    },
  })
);

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.delete("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        console.log('Logout successful');
        res.send({ loggedIn: false });
      }
    });
  } else {
    res.end()
  }
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const Email = req.body.Email;
  const msg = req.body.msg;

  db.query(
    "INSERT INTO queries (name, Email, msg) VALUES (?,?,?)",
    [name, Email, msg],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/msg", (req, res) => {
  db.query("SELECT * FROM queries", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM queries WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/dt", (req, res) => {
  const name=req.body.name;
  const conseller=req.body.conseller;
  const date = req.body.date;
  const  time= req.body.time;
  const book=req.body.book;


  db.query(
    "INSERT INTO date_time (name,conseller,date,time,book) VALUES (?,?,?,?,?)",
    [name,conseller,date, time,book],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/getdt", (req, res) => {

  db.query("SELECT * FROM date_time  ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update",(req,res)=>{
  const id=req.body.id;
  const book=req.body.book;

  db.query(
    "UPDATE date_time SET book=? WHERE id=?",
    [book,id],(res,err)=>{
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
})
app.put("/update1",(req,res)=>{
  const id=req.body.id;
  const book=req.body.book;

  db.query(
    "UPDATE date_time SET book=? WHERE id=?",
    [book,id],(res,err)=>{
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
})


app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});