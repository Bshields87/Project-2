$(".login-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var userLogin = {
    username: $("#username").val().trim(),
    password: $("#password").val().trim()
  };
console.log(userLogin)
  // Send the POST request.
  $.post("/api/new", userLogin)
  .then(function(data) {
    alert("Adding character...");
      console.log("welcome" + userLogin.name);
      console.log(data)
      // Reload the page to get the updated list
      //location.reload();

    }
  );
  $("#username").val("");
      $("#password").val("")
});