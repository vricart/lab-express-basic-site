const express = require("express")

const app = express()

app.use(express.static("public"))


//HOME
app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html")
}) 

//ABOUT
app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html")
}) 

//WORKS
app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html")
}) 


app.listen(3000, () => {
    console.log("server running")
})

