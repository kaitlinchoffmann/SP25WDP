// window.alert("Welcome to Class!!!! :)")
let loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', login)

function login(e) {
  e.preventDefault()
  let errorSection = document.getElementById("error")

  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  if(validString(username)) {
    errorSection.innerText = `Username cannot be blank!!!`
  } else {
    errorSection.innerText = ""  
    console.log(username)

    const user = {
      userName: username,
      passwd: password
    }
  
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