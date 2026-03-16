
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let students = [
  { name: "Rahul", course: "Computer Science" },
  { name: "Anita", course: "Information Technology" }
];

app.get("/", (req, res) => {
  res.render("index", { students });
});

app.post("/add", (req, res) => {
  const { name, course } = req.body;
  students.push({ name, course });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
