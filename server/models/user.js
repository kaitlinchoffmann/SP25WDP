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

// USER Example:
// const user = {
//   Username: "cathy123",
//   Email: "cathy@fakemail.com",
//   Password: "icecream"
// }


// CRUD Operations
async function getAllUsers() {
  let sql = `SELECT * FROM User`
  return await con.query(sql)
}

module.exports = { getAllUsers }