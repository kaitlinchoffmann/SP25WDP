import { getCurrentUser, removeCurrentUser, setCurrentUser } from "./user.js";
import { fetchData } from "./main.js";

const user = getCurrentUser()

if(!user) window.location.href = "index.html"

const profile = document.getElementById("profile")

profile.innerHTML+= `
   <h1>Welcome ${user.username}!</h1>
   <button id="deleteAccount">Delete Account</button>
`

const deleteUser = document.getElementById("deleteAccount")
deleteUser.addEventListener('click', deleteAccount)

function deleteAccount() {
  if(confirm("Are you sure you want to leave me?? :(( PLease NOOOOOOOOOOO!!!!!!!!!!!")) {
    fetchData('/users/deleteAccount', user, "DELETE")
    .then(data => {
      if(!data.message) {
        removeCurrentUser()
        window.location.href = "index.html"
      }
    })
    .catch(err => {
      errorSection.innerText = `${err.message}`
    })
  }
}

// edit username functionality
const editForm = document.getElementById("editForm")
if(editForm) editForm.addEventListener('submit', editUsername)

function editUsername(e) {
  e.preventDefault()

  user.username =  document.getElementById("username").value 
  
  fetchData('/users/update', user, "PUT")
  .then(data => {
    removeCurrentUser()
    setCurrentUser(data)
  })
  .catch(err => {
    errorSection.innerText = `${err.message}`
  })
}  