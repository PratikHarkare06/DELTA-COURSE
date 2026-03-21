const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "pass@sql",
});
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Inserting New data
// let q = "INSERT INTO user(id, username, email, password) VALUES ?";
// let users = [
//   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];
// let data = [];
// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser()); //100 fake users
// }

// Show tables

// connection.query(q, [data], (error, result) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(result);
// console.log(result.length);
// console.log(result[0]);
// console.log(result[1]);

//   connection.end();
// });

//Routes

//Home Route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let count = result[0]["count(*)"];
      // console.log(result[0]["count(*)"]);
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.render("Error in DB");
  }
});

//Show Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (error, users) => {
      if (error) throw error;
      // console.log(result);
      // res.send(result);
      res.render("showusers.ejs", { users });
    });
  } catch (error) {
    console.log(error);
    res.render("Error in DB");
  }
});
//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];

      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.send("Error in DB");
  }
});
//Update Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Password is incorrect");
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'
          `;
        connection.query(q2, (error, result) => {
          if (error) throw error;
          res.redirect("/user");
        });
      }
      // res.send(user);
      // res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.send("Error in DB");
  }
});

// Add User

// Show the form
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

// Handle form submission
app.post("/user", (req, res) => {
  let { id, username, email, password } = req.body;

  let q = "INSERT INTO user (id,username, email, password) VALUES (?, ?, ?,?)";

  connection.query(q, [id, username, email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error in DB");
    }
    res.redirect("/user"); // redirect after successful insertion
  });
});

// Delete User

// Show delete confirmation page
app.get("/user/:id/confirm-delete", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM user WHERE id = ?", [id], (err, results) => {
    if (err) return res.send("DB Error");
    if (results.length === 0) return res.send("User not found");
    res.render("delete", { user: results[0] });
  });
});
// Handle delete after verifying email & password
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  const checkQuery =
    "SELECT * FROM user WHERE id = ? AND email = ? AND password = ?";
  connection.query(checkQuery, [id, email, password], (err, results) => {
    if (err) return res.send("DB Error");
    if (results.length === 0) return res.send("Email or password incorrect!");

    connection.query("DELETE FROM user WHERE id = ?", [id], (err, result) => {
      if (err) return res.send("Error deleting user");
      res.redirect("/user");
    });
  });
});

app.listen("8080", () => {
  console.log("Server is running on port 8080");
});
