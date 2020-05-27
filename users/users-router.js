const express = require('express');
const db = require('./users-model')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');
const validateUser = require('../middleWare/validate-user');

router.get('/', (req, res) => {
    db.getUsers()
    .then(users => {
        res.status(200).json({users: users})
    })
    .catch(error => {
        res.status(500).json({message: "could not retrieve users"})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.getUsersById(id)
    .then(users => {
        res.status(200).json({users: users})
    })
    .catch(error => {
        res.status(500).json({message: "could not retrieve users"})
    })
})

router.post('/register', validateUser, (req, res) => {
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 12)

    user.password = hash;

    db.register(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to post the user' });
        })
})

router.post('/login', validateUser, (req, res, next) => {
    const {username, password} = req.body

    db.login(username)
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                res.status(200).json({message: `Welcome ${user.username}!, have a token...`, token});
                } else {
                  res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(err => {
            res.status(500).json({message: "error", err})
            console.log(err)
        })
})

function generateToken(user) {
    const payload = {
        sub: user.id, //who is this token about?
        username: user.username
        // ... other Data
    }
    // const secret = 'faowhfaopwfwapowaoprkapworkapwofs'
    const options = {
        expiresIn: '8h',
    }

    const token = jwt.sign(payload, secrets.jwtSecret, options)
    return token
}

module.exports = router;