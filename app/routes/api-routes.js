var User = require("../models/users");
var Survey = require("../models/surveys");

module.exports= function(app){

  app.get("/api/:user", function(req, res) {
    if (req.params.user) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      User.findOne({
        where: {
          routeName: req.params.user
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      User.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });


app.post("/api/new", function(req, res) {
  // Take the request...
  var user = req.body;

  // Create a routeName

  // Using a RegEx Pattern to remove spaces from user.name
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  var User = user.name.replace(/\s+/g, "").toLowerCase();

  // Then add the user to the database using sequelize
  User.create({
    
    email: user.email,
    name: user.name,
    age: user.age,
    photo: photo,
    userName: userName,
    password: password,
    
  });

  res.status(204).end();
});
}