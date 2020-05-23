const express = require('express');

const db = require('../posts/posts-model')

module.exports = (req, res, next) => {
    const id = req.params.id
    db.getPostsById(id)
    .then(post => {
        if(post.length == 0) {
            console.log(post)
        res.status(404).json({message: "Can not find a user with this ID" })
        } else {
            console.log(post)
            next()
        }
    })
    .catch(error => {
        res.status(404).json({message: "Can not retrieve data" })
    })
}