//Bringing in express and routes
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

//setting up express
const app = express();
const PORT = process.env.PORT || 3001;

//setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//port listening
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Your server running on port ${PORT}!`);
  });
});