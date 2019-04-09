var User = require("../models/users");
//var Survey = require("../models/surveys");

const router = require('express').Router()

module.exports = function (app) {

  app.get('/users', function (req, res) {

    User.findAll({}).then(function (result) {
      return res.json(result);
    });
    // console.log(res)
    // res.json(Users)
  })
  //end route


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
        return res.redirect("/dashboard");

      } else {
        console.log("ERROR")
        res.send(err)
      }
    }
  });
//end route

app.post("/register", async function (req, res) {
    // Take the request...
    var user = req.body;
    console.log("this is me", req.body)
    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //var routeName = user.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    await User.create({
      //routeName: routeName,
      email: user.email,
      fullname: user.fullname,
      age: parseInt(user.name),
      photo: user.photo,
      userName: user.userName,
      password: user.password,
      bio: user.bio,
      datingPreference: user.datingPreference,

    }).then(function (User) {
      console.log(User)
      return res.redirect("/quiz");
    });
    //console.log(user.email)
    res.status(204).end();
  });



}





