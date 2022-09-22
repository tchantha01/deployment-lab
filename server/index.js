const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 4050



app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '36f7c0e95faf4811942e1f2f0cb13ae2',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')





app.use('/', express.static(path.join(__dirname, '../client/main.html')))
app.use(express.static(path.join(__dirname, '../client')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.js'))
  })
  







app.listen(port, () => {
    console.log('Docked at port ' + port)})