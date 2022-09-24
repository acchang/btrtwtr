const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'rap'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
    (client) => {
        console.log(`Connected to ${dbName} Database`);
        db = client.db(dbName);
    }
    );

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

