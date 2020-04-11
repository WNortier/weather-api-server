const WeatherData = require('../models/weather');


exports.getLocationKey = async (req, res, next) => {
    // const user = new User(req.body);
    // await user.save();
    // const users = await User.fetchAll();
    // console.log(users[0])
    console.log(req.body.location)

        const weather = new WeatherData(req.body.location);
        const theKey = await weather.retrieveKey();
        console.log(theKey)
        //const fiveDay = await weather.fiveDayForecast(theKey);
        //const currentConditions = await weather.currentConditions(theKey);

    res.status(201).json({
        message: 'Location Received',
        // details: { users }
    })
};