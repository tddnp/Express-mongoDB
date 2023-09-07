const connection = require('../config/database')
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../services/CRUDServices')

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
}

const getUpdatePage = async (req, res) => {
    let userId = await getUserById(req.params.id)

    res.render('edit.ejs', { userEdit: userId })
}

const postUpdatePage = async (req, res) => {
    let id = req.body.id
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    await updateUser(name, email, city, id)

    //res.send("update successfully",)
    res.redirect("/listUser",)
}

const getDeletePage = async (req, res) => {
    let user = await getUserById(req.params.id)
    console.log(user);
    res.render('deleteForm.ejs', { userEdit: user })
}

const postDeletePage = async (req, res) => {
    await deleteUser(req.body.id)
    res.redirect('/listUser');
}

module.exports = {
    postCreateNewUser,
    getCreateNewUser,
    getDuyCheo,
    getListUser,
    getUpdatePage,
    postUpdatePage,
    getDeletePage,
    postDeletePage
}