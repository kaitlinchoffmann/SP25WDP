import { fetchData } from "./main.js"
// window.alert("Welcome to Class!!!! :)")
let loginForm = document.getElementById('loginForm')
if(loginForm) loginForm.addEventListener('submit', login)

function login(e) {
  e.preventDefault()
  let errorSection = document.getElementById("error")

  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  if(validString(username)) {
    errorSection.innerText = `Username cannot be blank!!!`
  } else {
    errorSection.innerText = ""  

    const user = {
      Username: username,
      Password: password
    }

    fetchData('/users/login', user, "POST")
    .then(data => {
      if(!data.message) {
        setCurrentUser(data)
        window.location.href = "index.html"
      }
    })
    .catch(err => {
      errorSection.innerText = `${err.message}`
    })
  
    let section = document.getElementById("welcome")
    section.innerHTML = `Welcome, ${username}!`
  
    console.log(user)
  }
  document.getElementById('username').value = ""
  document.getElementById('password').value = ""

}

function validString(word) {
  return word == ""
}

// register form code
let registerForm = document.getElementById("registerForm")
if(registerForm) registerForm.addEventListener('submit', register)

function register(e) {
  e.preventDefault() 

  let errorSection = document.getElementById("error")

  const user = {
    Username: document.getElementById("username").value,
    Password: document.getElementById("password").value,
    FirstName: document.getElementById("firstName").value,
    LastName: document.getElementById("lastName").value,
    Email: document.getElementById("email").value
  }

  fetchData("/users/register", user, "POST")
  .then(data => {
    if(!data.message) {
      setCurrentUser(data)
      window.location.href = "index.html"
    }
  })
  .catch(err => {
    errorSection.innerText = `${err.message}`
  })
}  

// local storage functions
export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}
// example accessing userId for second entity
// let currentUser = getCurrentUser()
// let userId = currentUser.userId

export function removeCurrentUser() {
  localStorage.removeItem('user')
  window.location.href = "index.html"
}