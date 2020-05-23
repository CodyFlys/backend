const express = require('express');

module.exports = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({message: 'No post data was provided'})
    } else if (!req.body.title || !req.body.content) {
        res.status(400).json({message: 'A title and content is required'}).end()
    } else {
        next()
    }
}