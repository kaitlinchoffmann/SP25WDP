let getUserBTN = document.getElementById("getUsers")
getUserBTN.addEventListener('click', getAllUsers)

function getAllUsers() {
  // e.preventDefault() don't need this due to being a button! not a form
  fetch('http://localhost:3000/users/getUsers')
  .then(response => response.json())
  .then(data => console.log(data))
}