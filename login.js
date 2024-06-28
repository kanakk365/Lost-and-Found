const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

let alert = document.querySelector(".alert");
let signUpBtn = document.querySelector(".signUp-Btn");
let signInBtn = document.querySelector(".signIn-Btn");

signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let createUsername = document.querySelector(".createUsername").value;
  let createEmail = document.querySelector(".createEmail").value;
  let createPassword = document.querySelector(".createPassword").value;

  let user = {
    username: createUsername,
    email: createEmail,
    password: createPassword,
  };

  if (localStorage.getItem(createEmail)) {
    alert.innerText = "Email is already registered.";
    return;
  }

  let json = JSON.stringify(user);
  localStorage.setItem(createEmail, json);
  console.log("added");
});

signInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let signEmail = document.querySelector(".signEmail").value;
  let signPassword = document.querySelector(".signPassword").value;

  let userg = localStorage.getItem(signEmail);
  let userData = JSON.parse(userg);

  if (userg) {
    if (signPassword === userData.password) {
      window.location.href = `./dashboard.html`;
    } else {
      alert.innerText = `WRONG PASSWORD`;
    }
  } else {
    alert.innerText = `WRONG EMAIL`;
  }
});
