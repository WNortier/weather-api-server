const express = require('express');

const locationController = require('../controllers/locations')
const userController = require('../controllers/users')

const router = express.Router();

router.get('/get-locations', locationController.getLocations);

router.post('/add-location', locationController.addLocation);

router.post('/add-user', userController.addUser)

module.exports = router;