const express = require('express');

const db = require('../users/users-model')

module.exports = (req, res, next) => {
    const id = req.params.id
    db.getUsersById(id)
    .then(user => {
        if(user.length == 0) {
            console.log(user)
        res.status(404).json({message: "Can not find a user with this ID" })
        } else {
            console.log(user)
            next()
        }
    })
    .catch(error => {
        console.log(user)
        res.status(404).json({message: "Can not retrieve data" })
    })
}