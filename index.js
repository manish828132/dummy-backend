require('dotenv').config()
//console.log(process.env)



const express = require('express')
const app = express()
//const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',function(req,res){
    res.send('manish@828132');
})

app.get('/login',function(req,res){
    res.send('<h1>please login </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})