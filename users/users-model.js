const db = require('../data/dbConfig');

function getUsers() {
    return db('users')
}

function getUsersById(id) {
    return db('users')
        .where({ 'users.id': id })
}

function register(newUser) {
    return db('users').insert(newUser)
}

function login(username){
    return db('users').where({username: username})
}

module.exports = {
    getUsers,
    getUsersById,
    register,
    login
}