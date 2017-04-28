//dependencies 

var express = require("express");
var bodyParser = require("body-parser");

//express server setup

var app = express();
var PORT = 3000;

//bodyParser commands so that server knows how to interperet data recieved 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//directs server to route files 
 require("./app/routing/apiRoutes")(app);
 require("./app/routing/htmlRoutes")(app);

//turns on listener to begin running server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
