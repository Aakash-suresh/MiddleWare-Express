const express = require('express')
const app=express()
const users = require('./users.js')

app.get('/',(request,response)=>{
    response.status(500).json("GET Router to Home Page...")
})

app.use('/users',users)
app.listen(4000)