const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

/* REGEX */

const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

/*Funciones auxiliares */

const isEmpty = (value) => {
  return value === "";
};

const isBetween = (min, max, length) => {
  return length >= min && length <= max;
};

const isEmailValid = (email) => {
  return EMAIL_REGEX.test(email);
};

const isPasswordValid = (password) => {
  return PASSWORD_REGEX.test(password);
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const errorContainer = formField.querySelector(".error-text");
  errorContainer.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
};

const checkName = () => {
  let valid = false;
  const name = nameInput.value.trim();
  if (isEmpty(name)) {
    showError(nameInput, "Name is required.");
  } else {
    showSuccess(nameInput);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  let valid = false;
  const lastName = lastNameInput.value.trim();
  if (isEmpty(lastName)) {
    showError(lastNameInput, "Last name is required.");
  } else {
    showSuccess(lastNameInput);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailInput.value.trim();
  if (isEmpty(email)) {
    showError(emailInput, "Email is required.");
  } else if (!isEmailValid(email)) {
    showError(emailInput, "the email is invalid");
  } else {
    showSuccess(emailInput);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = passwordInput.value.trim();
  console.log(password);
  if (isEmpty(password)) {
    showError(passwordInput, "Password is required.");
  } else if (isPasswordValid(password)) {
    showError(
      passwordInput,
      "the password must have between 8 and 15 characters"
    );
  } else {
    showSuccess(passwordInput);
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValid = checkName();
  const lastNameValid = checkLastName();
  const emailValid = checkEmail();
  const passwordValid = checkPassword();

  const isFormValid = nameValid && lastNameValid && emailValid && passwordValid;

  if (isFormValid) {
    form.submit();
  }
  console.log(isFormValid, "is form valid");
});
