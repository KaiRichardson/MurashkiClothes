import axios from "axios";

export default {
	// Gets all users
	getUsers: function() {
		return axios.get("/api/users");
	},
	// Gets the user with the given id
	getUser: function(id) {
		return axios.get("/api/users/" + id);
	},
	// Saves a user to the database
	saveUser: function(userData) {
		return axios.post("/api/users", userData);
	},
	// Deletes the user with the given id
	deleteUser: function(_id) {
		return axios.delete("/api/users/" + _id);
	}
};