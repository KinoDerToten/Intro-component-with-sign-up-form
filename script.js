const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const formGroup = document.querySelectorAll(".form-group");
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setError(firstName);
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName);
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email);
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password);
  } else {
    setSuccess(password);
  }
});

function setError(input) {
  const formControl = input.parentElement;
  formControl.className = "form-group error";
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-group";
}
