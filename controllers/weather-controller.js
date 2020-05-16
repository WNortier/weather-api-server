const WeatherData = require('../models/weather-model');


exports.getLocationKey = async (req, res, next) => {

    const weather = new WeatherData(req.body.location);

    const theKey = await weather.retrieveKey();
    console.log(theKey);


    const fiveDay = await weather.fiveDayForecast(theKey);
    console.log('five', fiveDay);

    // const currentConditions = await weather.currentConditions(theKey);
    // console.log('current', currentConditions);

    res.status(201).json({
        fiveDay
        // message: currentConditions[0].WeatherText
        // details: { users }
    });
};