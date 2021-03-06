const express = require('express')
const router = express.Router();
const weatherController = require('../controllers/weather-controller')

router.post('/get-location-key', weatherController.getLocationKey)

module.exports = router;