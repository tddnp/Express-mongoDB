//import connection from "../config/database";
const connection = require("../config/database")

const getAllUsers = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM Users`)
    return results
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE ID = ?`, [userId]
    )
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUser = async (name, email, city, id) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET
            name = ?,
            email = ?,
            city = ?
        WHERE
            ID = ?`,
        [name, email, city, id]
    )
}

const deleteUser = async (userId) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE ID = ?`, [userId]
    )
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}