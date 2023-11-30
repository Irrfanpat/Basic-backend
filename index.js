require('dotenv').config()
const express = require("express");
const app = express();

const port = 7000;

app.get('/', (req, res)=>{
    res.send("Hello you are on right route")
})

app.get('/login', (req, res)=>{
    res.send("<h1>Your are on login page</h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Port is ruunig on ${port}`)
});