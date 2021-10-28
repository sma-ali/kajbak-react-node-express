// in order to grab something from the express/node api we need this
// to parse automatically every json bject that i sent from front end
const express = require("express");
require('dotenv').config()

const mysql = require("mysql");

// allows crossplatform delivery of information, from front to back
const cors = require("cors");

// needed to parse the req.body elements we get from front-end
const bodyParser = require("body-parser");
// parse all the cookies
const cookieParser = require("cookie-parser");
// needed to create sessions and maintain them
const session = require("express-session");

// appel bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

// appel librairie jwt
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
// make connection bewteen front and back by using sessions and cookies
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// création du cookie
app.use(
  session({
    key: "userId",
    secret: "potato",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

// create user
app.post("/register", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const address = req.body.address;
  const city = req.body.city;
  const zip = req.body.zip;
  const phonenumber = req.body.phonenumber;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (firstname, lastname, email, password, address, city, zip, phonenumber) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
      [firstname, lastname, email, hash, address, city, zip, phonenumber],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("values inserted");
        }
      }
    );
  });
});

// middleware pour vérifier le token
const verifyJWT = (req, res, next) => {
  // we grab the token from the headers, called x access token
  const token = req.headers["x-access-token"];

  //si pas de token
  if (!token) {
    res.send("Yo, we need a token bro! please give it to us next time");
  } else {
    //on vérifie le token
    jwt.verify(token, "bigpotato", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U failed to authenticate" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

// on vérifie si l'utilisateur est authentifié avec le bon JWT
app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("yo, you are authenticated, congrats bruh");
});

// requete post pour voir si l'user est loggé
app.get("/login", (req, res) => {
  // if there is a session with a user object already created in our server
  if (req.session.user) {
    // l'utilisateur est alors bien connecté
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    // l'utilisateur n'est pas connecté
    res.send({ loggedIn: false, user: req.session.user });
  }
});

// login user
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // cherche l'utilisateur dans la bdd via son mail
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      // s'il y a bien un résultat
      if (result.length > 0) {
        // compare le mdp entré avec le mdp en bdd avec le hash de bcrypt
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            // l'utilisateur est enregistré dans une session créée pour ce dernier
            req.session.user = result;
            const id = result[0].id;
            const token = jwt.sign({ id }, "bigpotato", {
              expiresIn: 300,
            }); // env à placer pour le secret
            //envoie le json avec auth en true, le token et l'user
            res.json({ auth: true, token: token, result: result });
          } else {
            res.json({
              auth: false,
              message: "Wrong email/password combination",
            });
          }
        });
      } else {
        res.json({ auth: false, message: "no user exists" });
      }
    }
  });
});

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const wage = req.body.wage;

//   db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES(?, ?, ?, ?, ?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("values inserted");
//       }
//     }
//   );
// });

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE  id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete(`/delete/:id`, (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Select products
app.get("/select-products", (req, res) => {
  db.query("SELECT * FROM products WHERE state = 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/single-products", (req, res) => {
  const product_id = req.body.product_id;
  db.query("SELECT * FROM products WHERE product_id = ?",
  [product_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Insert products
app.post("/insert-products", (req, res) => {
  const product_name = req.body.product_name;
  const product_leading = req.body.product_leading;
  const category = req.body.category;
  const description = req.body.description;
  const price = req.body.price;
  //const product_img = req.body.product_img;
  db.query(
    "INSERT INTO products (product_name, product_leading, category, description, price, product_img, state) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [product_name, product_leading, category, description, price, "chaise.jpg", 1],
    (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Update products
app.get("/update-products", (req, res) => {
  db.query("SELECT * FROM products WHERE state = 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Delete products
app.get("/delete-products", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products WHERE id_product = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server running on port 3001...");
});
