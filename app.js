// 서버 만들기
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt-nodejs')

app.set('views', __dirname + "/views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.send("hello ")
})

const port = 4000
app.listen(port, () => {
    console.log("server start port : " + port)
})