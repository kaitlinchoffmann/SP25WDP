// specify we want to use express
const express = require('express')
const app = express()
const path = require("path")

app.use(express.json())

const userRoutes = require("./server/routes/user")
// const recipeRoutes = require("./server/routes/recipe")

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use(express.static(__dirname + "/public"))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

app.use("/users", userRoutes)
// app.use("/recipe", recipeRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`))