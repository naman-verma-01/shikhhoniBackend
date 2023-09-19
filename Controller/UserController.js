const express = require("express");
const router = express.Router();
const dotenv = require('dotenv');
const { signup, login, verify } = require('../Services/UserService')
dotenv.config()

// add language route
router.post('/signup', async (req, res) => {
    try {
        const response = await signup(req.body.email, req.body.name, req.body.password)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }

})

// get language route
router.get('/login', async (req, res) => {
    try {
        const response = await login(req.query.email, req.query.password)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }

})

// verify user
router.get('/verify', async (req, res) => {
    try {
        const response = await verify(req.query.jwt)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }

})


module.exports = router;
