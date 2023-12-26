const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  clearAlert();

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    showAlert("All form fields must be filled in");
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    form.reset();
  }
});

function showAlert(message) {
  alert(message);
}

function clearAlert() {
  const existingAlert = document.querySelector(".alert");
  if (existingAlert) {
    existingAlert.remove();
  }
}
