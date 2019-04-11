var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  

  // route loads the login in page
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get("/quiz", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/makeQuiz.html"));
  });
  
  // route loads the dashboard page after login
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  //route loads user profiles
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

};