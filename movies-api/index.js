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
const { 
    logErrors, wrapErrors, errorHandler 
} = require('./services/middleware/errorHandlers.js')
const notFoundHandler = require('./services/middleware/notFoundHandler.js')

app.use(express.json())

moviesApi(app)

//NotFound 404
app.use(notFoundHandler)

// Errors middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`)
})