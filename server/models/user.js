/*
let sql = `CREATE TABLE IF NOT EXISTS User (
    UserID INT NOT NULL AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL UNIQUE,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  );`

// USER Example:
const user = {
  Username: "cathy123",
  Email: "cathy@fakemail.com",
  Password: "icecream"
}
*/
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