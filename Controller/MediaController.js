const express = require("express");
const router = express.Router();
const dotenv = require('dotenv');
const { addMedia, getAllMedia, deleteFile } = require('../Services/MediaService')
dotenv.config()

// add language route
router.post('/addMedia', async (req, res) => {
    try {
        const response = await addMedia(req.body.title,req.body.url, req.body.type, req.body.userId)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }

})

// add language route
router.delete('/deleteFile', async (req, res) => {
    try {
        const response = await deleteFile(req.query._id)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }

})

// get language route
router.get('/getAllMedia', async (req, res) => {
    try {
        const response = await getAllMedia(req.query.userId)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;
