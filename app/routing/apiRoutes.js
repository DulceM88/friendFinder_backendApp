
//Loads user data from external folder

var userData = require("../data/userStats");

// routes to api get requests

module.exports = function(app){

	app.get("/api/friends",function(req, res){
		res.json(userData)
	});

	//API post requests

	app.post("/api/friends",function(req, res){

		userData.push(req.body);
		res.json(true);

	});

}