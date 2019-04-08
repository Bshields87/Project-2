$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var userLogin = {
      name: $("#username").val().trim(),
      password: $("#password").val().trim()
    };
 console.log(userLogin)
    // Send the POST request.
    $.ajax("/api/auth", {
      type: "GET",
      data: userLogin
    }).then(
      function() {
        console.log("welcome" + userLogin);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });