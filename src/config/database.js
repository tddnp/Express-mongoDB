require('dotenv').config()
//const mysql = require('mysql2/promise')
const mongoose = require('mongoose')

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })

const connection = async () => {
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27018')
    } catch (error) {
        console.log('error: ', error);
    }
}

module.exports = connection