const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config

const wisecracks = {
    'quote': 'ouch',
    'year': 1000,
    'name': 'jesus'
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(wisecracks)
})

app.get('/api/:name', (req, res)=>{
    console.log(req.params.name)
    res.json(wisecracks)
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server running on ${PORT}. Go catch it!`)
})

