const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDServices')

const getDuyCheo = (req, res) => {
    return res.render('duyChau.ejs')
}

const getListUser = async (req, res) => {
    let users = await getAllUsers()
    return res.render('listUsers.ejs', { listUsers: users })
}

const getCreateNewUser = (req, res) => {
    res.render('formCreateUser.ejs')
}

const postCreateNewUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    let [results, field] = await connection.query(
        `INSERT INTO Users (name, email, city) VALUES (?, ?, ?)`, [name, email, city]
    )

    res.send("create successfully",)
    res.redire
}

module.exports = {
    postCreateNewUser,
    getCreateNewUser,
    getDuyCheo,
    getListUser
}