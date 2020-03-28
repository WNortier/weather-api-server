const path = require('path')

const express = require('express');

const rootDirectory = require('../utility/path')

const router = express.Router();

// /admin/add-location => GET
router.get('/add-location', (req, res, next) => {
    console.log(req.body)
    res.sendFile(path.join(rootDirectory, 'views', 'add-location.html'));
});

router.post('/add-location', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

module.exports = router;