var db = require("../models")


module.exports = function (app) {

  app.get('/users', function (req, res) {

    
    db.Survey.findAll({
      include: [
      db.User
     ]
  }).then(Survey => {
    console.log(JSON.stringify(Survey))
      return res.json(Survey)
    })   
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
      const user = await db.User.findOne({ where: whereUser })
      //console.log(user)
      
      // If the user was not found that means the credentials were wrong.
      if (user) {
        console.log("auth ok")
        return res.redirect(`/dashboard/${user.id}`);

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
    //var routeName = db.user.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    var user = await db.User.create({
      //routeName: routeName,
      email: user.email,
      fullname: user.fullname,
      age: parseInt(user.age),
      photo: user.photo,
      userName: user.userName,
      password: user.password,
      bio: user.bio,
      datingPreference: user.datingPreference,
      location: user.location

    })

    return res.redirect(`/quiz/${user.id}`);
    //console.log(user.email)
  });
//end route

app.post("/quiz/:userid", async function (req, res) {
  var survey= req.body
  console.log(req.body)

  await db.Survey.create({
    question1: survey.question1,
    question2: survey.question2,
    question3: survey.question3,
    question4: survey.question4,
    question5: survey.question5,
    UserId: req.params.userid
  }).then(function(Survey){
    console.log(Survey)
    return res.redirect(`/dashboard/${user.id}`)
  });
  res.status(204).end();

})

// app.get("/survey/:userid", function(req, res){
//   db.Survey.findOne({ where: UserId})
//   console.log(Survey)
//   res.send(Survey)
  
// })

}
