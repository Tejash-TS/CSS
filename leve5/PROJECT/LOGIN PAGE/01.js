// Define the function that validates the input data
function solve() {
    // Get the values of the input fields
    var username = document.getElementById("first").value;
    var password = document.getElementById("password").value;
  
    // Compare the input values with some predefined values
    // You can change these values as you wish
    var validUsername = "user";
    var validPassword = "web_dev";
  
    // Check if the input values match the predefined values
    if (username == validUsername && password == validPassword) {
      // If they match, show a success message and reload the page
      alert("You have successfully logged in!");
      location.reload();
    } else {
      // If they don't match, show an error message
      alert("Invalid username or password. Please try again.");
    }
  }
  