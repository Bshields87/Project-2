var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/index.html"));
  });

  // route loads the login in page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/register.html"));
  });
  
  // route loads the dashboard page after login
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/dashboard.html"));
  });

  //route loads user profiles
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/search.html"));
  });

};
