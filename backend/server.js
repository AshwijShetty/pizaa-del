const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "pizza"
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
// Register API
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Error");
      }
      res.send("User Registered Successfully");
    }
  );
});
// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) return res.send("Error");

      if (result.length > 0) {
        res.send("Login Success");
      } else {
        res.send("Invalid Credentials");
      }
    }
  );
});
// Save Order API
app.post("/order", (req, res) => {
  const { items, total } = req.body;

  db.query(
    "INSERT INTO orders (items, total) VALUES (?, ?)",
    [JSON.stringify(items), total],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Error saving order");
      }
      res.send("Order placed successfully");
    }
  );
});