// specify we want to use express
const express = require('express')
const app = express()

const userRoutes = require("./server/routes/user")
// const recipeRoutes = require("./server/routes/recipe")

app.use("/users", userRoutes)
// app.use("/recipe", recipeRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`))