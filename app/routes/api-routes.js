var User = require("../models/users");
//var Survey = require("../models/surveys");
var Users = require("../seeders/20190409020839-my-seed");
const router = require('express').Router()

module.exports= function(app){

  app.get('/users', function (req, res) {
   
    User.findAll({}).then(function(result) {
      return res.json(result);
    });
    // console.log(res)
    // res.json(Users)
})
app.post('/auth', async function (req, res, err) {           
  var whereUser = {
      userName: req.body.username,
      password: req.body.password
      
  }      
  console.log("this is me", whereUser)

 if (!req.body.username || !req.body.password) {
     res.send('login failed');
  } else {        
      // The following code return an instance of the user if it was found.
     const user = await User.findOne({ where: whereUser })

     // If the user was not found that means the credentials were wrong.
     if (user) {
         console.log("auth ok")
         return  res.redirect("/dashboard");
       
     } else {
         console.log("ERROR")
         res.send(err)
     }
 } 
});





// app.post("/newuser", function(req, res) {
//   // Take the request...
//   var user = req.body;

//   // Create a routeName

//   // Using a RegEx Pattern to remove spaces from character.name
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   //var routeName = user.name.replace(/\s+/g, "").toLowerCase();

//   // Then add the character to the database using sequelize
//   User.create({
//     //routeName: routeName,
//     email: user.email,
//     fullname: user.fullname,
//     age: user.name,
//     photo: user.photo,
//     userName: user.userName,
//     password: user.password,
//     bio: user.bio,
//     datingPreference: user.datingPreference,

//   });

//   res.status(204).end();
// });
}
