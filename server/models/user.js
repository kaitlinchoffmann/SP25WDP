// psuedo database => can use object literal as temp database
// const users = [
//   {
//     userId: 12345,
//     userName: "cathy123",
//     password: "icecream"
//   },
//   {
//     userId: 55555,
//     userName: "bobbi",
//     password: "badpasswd"
//   }
// ]

const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS User (
      UserID INT NOT NULL AUTO_INCREMENT,
      Username VARCHAR(255) NOT NULL UNIQUE,
      Email VARCHAR(255) NOT NULL UNIQUE,
      Password VARCHAR(255) NOT NULL,
      CONSTRAINT userPK PRIMARY KEY(userID)
    );`
  await con.query(sql)  
}
createTable()

// CRUD Operations
async function getAllUsers() {
  let sql = `SELECT * FROM User`
  return await con.query(sql)
}
// USER Example:
const user = {
  Username: "Bobbyiscool",
  Email: "b@b",
  Password: "cathysucks"
}
// READ in CRUD: Logging in a user
async function login(user) {
  let cUser = await userExists(user.Username)
  if(!cUser[0]) throw Error("Username does not exist!") 
  if(cUser[0].password != user.Password) throw Error("Password is incorrect!")
    
  return cUser[0]
}

async function userExists(username) {
  let sql = `
    SELECT * FROM User
    WHERE Username="${username}"
  `
  return await con.query(sql)
}

// CREATE in CRUD - Registering a user

module.exports = { getAllUsers, login }