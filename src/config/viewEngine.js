const path = require('path')
const express = require('express')

const configviewEngine = (app) => {
    // config template engine
    console.log('dir', __dirname);
    app.set('views', path.join('./src/', 'views/'))
    app.set('view engine', 'ejs')

    // config static files
    app.use(express.static(path.join('./src/', './public')))
}

module.exports = configviewEngine
