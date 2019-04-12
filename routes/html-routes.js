var path = require("path");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // login page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  

  // new user personal info page
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  //new user create survey page
  app.get("/quiz/:userid", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/makeQuiz.html"));
  });
  
  //user dashboard page
  app.get("/dashboard/:userid", function(req, res) {
res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  //user profile page
  app.get("/profile/:userid", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  
  //messenger page
  app.get('/messages', function(req, res){
    res.sendFile(path.join(__dirname, '/../public/inbox.html'));
})

};
