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
    WHERE username="${username}"
  `
  return await con.query(sql)
}

// CREATE in CRUD - Registering a user
async function register(user) {
  const cUser = await userExists(user.Username)
  if(cUser.length > 0) throw Error("Username already in use!")

  let sql = `
    INSERT INTO User(password, username, email, firstName, lastName)
    VALUES("${user.Password}", "${user.Username}", "${user.Email}", "${user.FirstName}", "${user.LastName}")
  `
  await con.query(sql)

  return await login(user)
}


async function editUsername(user) {
  let sql = `
    UPDATE User SET
    username = "${user.username}"
    WHERE userId = ${user.userId}
  `
  await con.query(sql)
  const currentUser = await userExists(user.username)
  return currentUser[0]
}

// USER Example:
const user = {
  Username: "Bobbyiscool",
  Email: "b@b",
  Password: "cathysucks",
  FirstName: "Bob",
  LastName: "Bobby"
}
async function deleteAccount(user) {
  let sql = `
    DELETE FROM user
    WHERE userId = ${user.userId}
  `
  await con.query(sql)
}

module.exports = { getAllUsers, login, register, editUsername, deleteAccount }