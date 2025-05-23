import { getCurrentUser, removeCurrentUser } from "./user.js";
const nav = document.querySelector('nav')

if(getCurrentUser()) {
  nav.innerHTML = `
    <ul>
        <li><a href="index.html">HOME</a></li>
        <li><a href="profile.html">PROFILE</a></li>
        <li><a id="logout">LOGOUT</a></li>
    </ul>
  `
} else {
  nav.innerHTML = `
    <ul>
        <li><a href="index.html">HOME</a></li>
        <li><a href="login.html">LOGIN</a></li>
        <li><a href="register.html">Register</a></li>
    </ul>
  `
}

// enable logout functionality
const logout = document.getElementById("logout")
if(logout) logout.addEventListener('click', removeCurrentUser)

// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
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