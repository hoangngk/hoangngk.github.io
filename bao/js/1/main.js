function validateEmail(email) {
  // Apply regular expressions validation for email validation
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePassword(password) {
  // Apply regular expressions validation for password validation
  // at least one lowercase and one uppercase letter
  // at least six characters
  var re = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(password);
}
function validate() {
  var loginForm = document.getElementById("loginForm");
  var alertMessage = document.querySelector("#alertMessage");
  var email = document.querySelector("#emailInput").value;
  var password = document.querySelector("#passwordInput").value;
  var isLoginable = true;
  if (!validateEmail(email)) {
    alertMessage.innerHTML += "Email " + email + " is not valid. ";
    alertMessage.className = "alert alert-danger";
    isLoginable = false;
  }

  if (!validatePassword(password)) {
    alertMessage.innerHTML += "Password " + password + " is not valid. ";
    alertMessage.className = "alert alert-danger";
    isLoginable = false;
  }

  if (isLoginable) {
    // loginForm.submit();
    // Temp alert for passed validation and login successfully
    alertMessage.innerHTML = "Login successfully";
    alertMessage.className = "alert alert-info";
  }
}
