const express = require('express');

const locationController = require('../controllers/locations')

const router = express.Router();

router.get('/get-locations', locationController.getLocations);

router.post('/add-location', locationController.addLocation);

module.exports = router;