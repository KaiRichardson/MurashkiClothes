require("dotenv").config();

const express = require("express");
const app = express();
const dbConn = require("./database/db");

const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use("/", routes);

mongoose
  .connect(
    process.env.MONGODB_URI ||
      `mongodb://${process.env.MDB_USERNAME}:${process.env.MDB_PASSWORD}@ds063449.mlab.com:63449/heroku_m45vkrg9`,
    { useNewUrlParser: true, useFindAndModify: false }
  )
  .catch(err => console.log(err));

// Start the API server
dbConn()
  .then(() => {
    console.log("Connected to DB.");
    app.listen(
      PORT,
      () => console.log(`APP LISTENING FOR CONNECTIONS ON PORT: ${PORT}`),
      console.log(`\nPlease visit http://localhost:${PORT}/`)
    );
  })
  .catch(error => {
    console.log("Could not start APP error:", error);
  });
