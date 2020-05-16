const axios = require('axios')

module.exports = class WeatherData {
    constructor(location) {
        this.location = location;
        this.key = undefined;
        this.accuWeatherAPIKey = 'Kpz82H3k2hCmDw9TMv78cfqmBkNSdxXS'
        this.currentConditionsData = undefined;
        this.fiveDayForecastData = undefined;
    }

    async retrieveKey() {
        try {
            let self = this;
            const reqString = 'http://dataservice.accuweather.com/locations/v1/cities/search?q=' + this.location + '&apikey=' + this.accuWeatherAPIKey;
            await axios.get(reqString)
                .then(function (response) {
                    self.key = response.data[0].Key;
                })

            return self.key
        } catch (error) {
            console.log('retrieveKey', error)
        }
    }

    async indices(locationKey) {
        try {
            let self = this;
            const reqString = 'https://dataservice.accuweather.com/indices/v1/daily/5day/' + locationKey + '?apikey=' + this.accuWeatherAPIKey;
            console.log('String', reqString)
            await axios.get(reqString, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function (response) {
                    self.fiveDayForecastData = response.data;
                });
            return this.fiveDayForecastData
        } catch (error) {
            console.log('fiveDay', error)
        }
    }

    async fiveDayForecast(locationKey) {
        try {
            let self = this;
            const reqString = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationKey + '?apikey=' + this.accuWeatherAPIKey;
            console.log('String', reqString)
            await axios.get(reqString, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function (response) {
                    self.fiveDayForecastData = response.data;
                });
            return this.fiveDayForecastData
        } catch (error) {
            console.log('fiveDay', error)
        }
    }

    async currentConditions(locationKey) {
        try {
            let self = this;
            const reqString = 'https://dataservice.accuweather.com/currentconditions/v1/' + locationKey + '?apikey=' + this.accuWeatherAPIKey + '&details=true'
            await axios.get(reqString, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(function (response) {
                    self.currentConditionsData = response.data;
                });
            return self.currentConditionsData
        } catch (error) {
            console.log('currentConditions', error)
        }
    }
}