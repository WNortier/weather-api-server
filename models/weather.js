const axios = require('axios')

  module.exports = class WeatherData {
      constructor(location) {
          this.location = location;
          this.key = undefined;
          this.accuWeatherAPIKey = 'Kpz82H3k2hCmDw9TMv78cfqmBkNSdxXS'
      }

      async retrieveKey() {
          let self = this;
          const reqString = 'http://dataservice.accuweather.com/locations/v1/cities/search?q=' + this.location + '&apikey=' + this.accuWeatherAPIKey;
          await axios.get(reqString)
              .then(function (response) {
                  self.key = response.data[0].Key
              })

          return self.key
      }

      async fiveDayForecast(locationKey) {
          const reqString = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationKey
          await axios.get(reqString)
              .then(function (response) {
                  console.log(response.data)
              })
      }

        async currentConditions(locationKey) {
            try {
                const reqString = 'https://dataservice.accuweather.com/currentconditions/v1/' + locationKey + '?apikey=' + this.accuWeatherAPIKey + '&details=true'
                await axios.get(reqString, {
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    })
                    .then(function (response) {
                        console.log(response.data)
                    })
            } catch (error) {
                console.log(error)
            }
        }
  }