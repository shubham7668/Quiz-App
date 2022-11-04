const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use("/data", express.static(__dirname + "/data"));

const quizFileDir = fs
  .readdirSync("./data")
  .filter((name) => name.endsWith(".js"));

const quizzes = [];

for (const file of quizFileDir) {
  const quizFile = require(`./data/${file}`);
  quizzes.push({
    title: quizFile.quizData.title,
    slug: file.replace(".js", "")
  });
}

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs", { quizzes });
});

app.get("/quiz", (req, res) => {
  res.render("quiz.ejs", { query: req.query.name });
});

app.listen(3000);
