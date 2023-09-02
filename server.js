const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 808

// config template engine
app.set('views', path.join(__dirname, './src/views/'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("Hello Duy <3")
})

app.get('/ejs', (req, res) => {
    res.render('example.ejs')
})

app.listen(port, () => {
    console.log(`app trying to listen of port: ${port}`)
})