require('dotenv').config()
const express = require('express')
const path = require('path')
const configviewEngine = require('./src/config/viewEngine')
const route = require('./src/routes/web')


const app = express()
const port = process.env.PORT || 808

//config template engine
configviewEngine(app)

// route
app.use('/', route)

app.listen(port, () => {
    console.log(`app trying to listen of port: ${port}`)
})