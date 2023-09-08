require('dotenv').config()
const express = require('express')
const path = require('path')
const configviewEngine = require('./src/config/viewEngine')
const route = require('./src/routes/web')
const connection = require('./src/config/database')

const app = express()
const port = process.env.PORT || 8081

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config template engine
configviewEngine(app)

// route
app.use('/', route)

//test connection
connection()

app.listen(port, () => {
    console.log(`app trying to listen of port: ${port}`)
})