const getHomePage = (req, res) => {
    res.send('Hello from controller')
}

const getEjs = (req, res) => {
    res.render('example.ejs')
}

module.exports = {
    getHomePage,
    getEjs
}