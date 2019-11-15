const express = require('express')
const app = express()

const { config } = require('./config/index')

/*app.get('/', function(req, res){
    res.send('hello world')
})

app.get('/json', function(req, res){
    res.json({'hello':'world}'})
})*/

const moviesApi = require('./routes/movies.js')

moviesApi(app)

app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`)
})