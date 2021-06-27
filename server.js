const express = require("express");
const mongoose = require("mongoose");
const routes = require('./controllers');
const Fitness = require("./models")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  Fitness.find(function (err, fitness) {
    if (err) return console.error(err);
    console.log(fitness);
  })
});