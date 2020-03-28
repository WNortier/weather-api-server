const path = require('path');

const express = require('express');

const rootDirectory = require('../utility/path')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'home.html'));
});

module.exports = router;