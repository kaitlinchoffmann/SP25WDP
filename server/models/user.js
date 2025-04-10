// psuedo database
const users = [
  {
    userId: 12345,
    userName: "cathy123",
    password: "icecream"
  },
  {
    userId: 55555,
    userName: "bobbi",
    password: "badpasswd"
  }
]

// CRUD Operations
function getAllUsers() {
  return users
}

function login() {

}

module.exports = { getAllUsers, login }