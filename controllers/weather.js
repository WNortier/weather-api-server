const WeatherData = require('../models/weather');


exports.getLocationKey = async (req, res, next) => {
        const weather = new WeatherData(req.body.location);
        const theKey = await weather.retrieveKey();
        console.log(theKey)
        //const fiveDay = await weather.fiveDayForecast(theKey);
        const currentConditions = await weather.currentConditions(theKey);
        console.log(currentConditions)

    res.status(201).json({
        message: currentConditions[0].WeatherText
        // details: { users }
    })
};