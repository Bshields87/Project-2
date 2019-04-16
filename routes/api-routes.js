var db = require("../models")


module.exports = function (app) {

  //json for all users
  app.get('/users', function (req, res) {


    db.Survey.findAll({
      include: [
        db.User
      ]
    }).then(Survey => {
      //console.log(JSON.stringify(Survey))
      return res.json(Survey)
    })
  })
  //end route

  //begin user profile route
  app.get('/user/:userid', async function (req, res) {
    var profileId = Object.values(req.params)
    console.log(profileId)
    await db.Survey.findOne({
      include: [
        db.User
      ],
      where: { UserId: profileId }
  }).then(user => {
      console.log("who am i" + user)
      console.log(user.id)
      return res.json(user)
    })
  })
  //end route

  //begin new set of answers create
  app.post('/user/:userid', async function (req, res, err) {
    var surveyAnswers = Object.values(req.body);
    var surveyId = Object.values(req.params)
    console.log(surveyAnswers[0])

    await db.Answer.create({
      answer1: surveyAnswers[0],
      answer2: surveyAnswers[1],
      answer3: surveyAnswers[2],
      answer4: surveyAnswers[3],
      answer5: surveyAnswers[4],
      SurveyId: surveyId


    })
    return res.json(surveyAnswers)
  })
  //end route

  //begin login route
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

  //begin new user create route
  app.post("/register", async function (req, res) {
    // Take the request...
    var user = req.body;
    console.log("this is me", req.body)

    var user = await db.User.create({

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

  //begin create survey route
  app.post("/quiz/:userid", async function (req, res) {
    var survey = req.body
    console.log(req.body)

    await db.Survey.create({
      question1: survey.question1,
      question2: survey.question2,
      question3: survey.question3,
      question4: survey.question4,
      question5: survey.question5,
      UserId: req.params.userid
    }).then(function (user) {
      console.log(user)
      return res.redirect(`/dashboard/${user.id}`)
    });
  })
  //end route

  //begin get survey route
  app.get("/survey/:userid", async function (req, res) {

    console.log(req.params.userid)
    var userSurvey = req.params.userid
    await db.Survey.findOne({
      include: [
        db.User
      ],
      where: { UserId: userSurvey }
    }).then(user => {
      console.log(user.id);
      const id = user.User.id;
      console.log(id);
      console.log(user.User.id)
      return res.json(user)
    })
  })
  //end route

  //begin route
  app.get("/messages/all", function (req, res) {
    db.Message.findAll({}).then(function (results) {
      res.json(results)
    })
  });
  //end route

  // begin new message route
  app.post("/messages/new", function (req, res) {
    console.log("New Message: " + req.body)

    db.Message.create({
      from: req.body.from,
      body: req.body.body,
      post_time: req.body.post_time
    }).then(function (results) {
      res.json(results)
    });
  });
  //end route

  //begin delete route
  app.delete("/messages/delete/:id", function (req, res) {
    console.log("delete: " + req.body)

    db.Message.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (Message) {
      console.log('deleted message with id: ', req.params.id);
      res.json(Message)

    });

  });
  //end route
}
