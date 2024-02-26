'use strict'
/*
    NodeJs SERVER
*/
require('dotenv').config(); // env file dan verileri alır ve process.env ye ekler
// const PORT=process.env.PORT
// const HOST=process.env.HOST
// console.log(process.env);

const PORT=process.env?.PORT || 8000
const HOST=process.env?.HOST || "127.0.0.1"
// npm i express
const express= require("express")
const app=express()

console.log("express server ");

app.get('/', (req, res)=> {
    res.send("express deneme")

})
app.listen(8000,()=>console.log(`server runned : http://${HOST}:${PORT}`))
