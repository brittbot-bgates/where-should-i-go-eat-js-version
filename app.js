const express = require("express");
const ejs = require("ejs");
const restaurant = require(__dirname + "/src/restaurants.js");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  // Both variables are blank so when the user loads up the website it's blank and waiting for them to click the button.
  var randomRestaurant = "";
  var restaurantResult = "";

  res.render("index", {randomRestaurant, restaurantResult});
});

app.post("/", (req, res) => {
  // Now the variables hold the code so once the user clicks the button the code picks the random restaurant.
  var randomRestaurant = restaurant.getRestaurant()[Math.floor(Math.random() * restaurant.getRestaurant().length)];
  var restaurantResult = randomRestaurant;

  res.render("index", {randomRestaurant, restaurantResult});
});

app.listen(port, () => {
  console.log("App listening at http://localhost:" + port);
});
