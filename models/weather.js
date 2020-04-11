const axios = require('axios')

  module.exports = class WeatherData {
      constructor(location) {
          this.location = location;
          this.key = undefined;
      }

      async retrieveKey() {
          let vm = this;
          console.log(this.location)
          const reqString = 'http://dataservice.accuweather.com/locations/v1/cities/search?q=' + this.location + '&apikey=Kpz82H3k2hCmDw9TMv78cfqmBkNSdxXS'
          console.log(reqString)
          await axios.get(reqString)
              .then(function (response) {
                //console.log(response.data[0].Key)
                vm.key = response.data[0].Key
              })
              return vm.key
      }

      async fiveDayForecast() {

      }
  }
