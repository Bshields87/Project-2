$("#submit").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    var newUser = {
      username: $("#username").val().trim(),
      password: $("#password").val().trim(),
      fullname: $("#name").val().trim(),
      email: $("#email").val().trim(),
      photo: $("#photo").val().trim(),
      age: $("#age").val().trim(),
      preference: $("#preference").val().trim(),
      bio: $("#textarea1").val().trim()
    };
  console.log(newUser)
    // Send the POST request.
    $.post("/api/new", newUser)
    .then(function(data) {
      alert("Adding member...");
        console.log("welcome" + newUser.name);
        console.log(data)
        // Reload the page to get the updated list
        //location.reload();
  
      }
    );
    $("#username").val("");
        $("#password").val("")
  });