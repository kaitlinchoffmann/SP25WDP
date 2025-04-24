// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if (response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}
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
        window.location.href = "food.html"
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
    Password: document.getElementById("password").value
  }

  fetchData("/users/register", user, "POST")
  .then(data => {
    if(!data.message) {
      setCurrentUser(data)
      window.location.href = "food.html"
    }
  })
  .catch(err => {
    errorSection.innerText = `${err.message}`
  })
}  

// local storage functions
function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}

function removeCurrentUser() {
  localStorage.removeItem('user')
}