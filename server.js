require('dotenv').config()
const express = require('express')
const path = require('path')
const configviewEngine = require('./src/config/viewEngine')
const route = require('./src/routes/web')
//database
const mysql = require('mysql2')
const { clearScreenDown } = require('readline')

const app = express()
const port = process.env.PORT || 808

//test dababase connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '123456',
    database: 'hoidanit'
})

connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log(results);
        console.log(fields);
    }
)

//config template engine
configviewEngine(app)

// route
app.use('/', route)

app.listen(port, () => {
    console.log(`app trying to listen of port: ${port}`)
})