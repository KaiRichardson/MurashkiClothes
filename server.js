require("dotenv").config();

const express = require("express");
const app = express();
const dbConn = require("./database/db");

const routes = require("./routes");
const morgan = require("morgan");

const PORT = process.env.PORT || 6969;

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
