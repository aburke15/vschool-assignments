var app = angular.module("weatherApp");

app.filter("tempConverter", function() {
    return function (temp) {
        return Math.floor(temp * (9/5) + 32) + " F°"
    }
});

app.service("LocationWeatherService", ["$http", function ($http) {
    var locationUrl = "https://michele-zonca-google-geocoding.p.mashape.com/geocode/json?address=";
    var weatherUrl = "https://simple-weather.p.mashape.com/weather?lat=";
    var forecastUrl = "https://simple-weather.p.mashape.com/weatherdata?lat=";
    var self = this;
    this.weatherIcons = ["https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Tornado-512.png", "https://cdn2.iconfinder.com/data/icons/lil-weather/177/hurricane-512.png", "http://ian.umces.edu/imagelibrary/albums/userpics/12865/normal_ian-symbol-weather-hurricane-n-hemisphere.png", "https://cdn0.iconfinder.com/data/icons/weather-web-app-ui/100/weather-10-512.png", "http://icon-park.com/imagefiles/simple_weather_icons_thunderstorms.png", "https://s0.wp.com/wp-content/themes/vip/shaw-globalnews/_img/weather/wx_79.png",
                           "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=47486536", "https://cdn1.iconfinder.com/data/icons/ios-weather-icons-part-1/60/iOs_weather_icons_EXP-11-128.png", "https://cdn4.iconfinder.com/data/icons/heavy-weather/100/Weather_Icons_23_rain_snow-512.png", "https://cdn4.iconfinder.com/data/icons/wthr-color/32/cloud-drizzle-512.png", "https://d30y9cdsu7xlg0.cloudfront.net/png/100017-200.png",
                           "https://camo.githubusercontent.com/cd01446f85a90912f72b13e9248261772d0ead25/68747470733a2f2f7261772e6769746875622e636f6d2f746f6d6b702f776561746865722d69636f6e732f6d61737465722f706e672f686561767925323073686f776572732e706e67", "https://camo.githubusercontent.com/cd01446f85a90912f72b13e9248261772d0ead25/68747470733a2f2f7261772e6769746875622e636f6d2f746f6d6b702f776561746865722d69636f6e732f6d61737465722f706e672f686561767925323073686f776572732e706e67", "https://cdn0.iconfinder.com/data/icons/weather-meteorology-3/64/weather-snow-flurries-512.png", "http://www.hiddenvalleyresort.com/wp-content/themes/HiddenValley_Spring/images/weatherIcons/png_snowreport/_17.png",
                           "https://cdn4.iconfinder.com/data/icons/weather-outlines-icon-set/142/blizzard-512.png", "https://cdn2.iconfinder.com/data/icons/lil-weather/161/snowflake-512.png", "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/hail.png", "https://cdn3.iconfinder.com/data/icons/chubby-weather/439/rain_snow-512.png", "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/dust.png", "https://cdn4.iconfinder.com/data/icons/heavy-weather/100/Weather_Icons_09_fog-512.png", "https://cdn4.iconfinder.com/data/icons/weather-outlines-icon-set/142/mist-512.png", "https://d30y9cdsu7xlg0.cloudfront.net/png/27750-200.png", "https://cdn4.iconfinder.com/data/icons/heavy-weather/100/Weather_Icons_01_wind-512.png",
                           "http://image005.flaticon.com/17/svg/55/55778.svg", "https://d30y9cdsu7xlg0.cloudfront.net/png/78887-200.png", "http://icon-park.com/imagefiles/simple_weather_icons2_cloudy.png", "http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Weather%20Partly%20cloudy%20night.ico",
                           "http://megaicons.net/static/img/icons_sizes/8/178/512/weather-partly-cloudy-day-icon.png", "http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Weather%20Partly%20cloudy%20night.ico", "http://www.iconsdb.com/icons/preview/gray/partly-cloudy-day-xxl.png", "https://cdn3.iconfinder.com/data/icons/weather-16/256/Clear_Night-512.png",
                           "https://cdn3.iconfinder.com/data/icons/weather-25/512/Sunny-512x512.png", "https://cdn2.iconfinder.com/data/icons/rounded-white-weather-icons/139/FairNight-RoundedWhite_weather-512.png",
                           "https://cdn2.iconfinder.com/data/icons/rounded-white-weather-icons/139/Fair_Day-RoundedWhite_weather-256.png", "https://cdn4.iconfinder.com/data/icons/vectory-weather-1/40/snow_and_rain-512.png", "https://cdn1.iconfinder.com/data/icons/weather-icons-6/512/termometr_sun-512.png", "http://icon-park.com/imagefiles/simple_weather_icons_mixed_rain_and_thunderstorms.png", "http://icon-park.com/imagefiles/simple_weather_icons_thunderstorms.png", "http://icon-park.com/imagefiles/simple_weather_icons_thunderstorms.png", "http://icon-park.com/imagefiles/simple_weather_icons_mixed_rain_and_thunderstorms.png",
                           "http://downloadicons.net/sites/default/files/heavy-snow-icon-23780.png", "http://icon-park.com/imagefiles/simple_weather_icons2_snow.png", "http://downloadicons.net/sites/default/files/heavy-snow-icon-23780.png", "http://megaicons.net/static/img/icons_sizes/8/178/512/weather-partly-cloudy-day-icon.png", "https://cdn4.iconfinder.com/data/icons/stroke-weather-and-forecast/64/weather_cloud_thundershower-512.png", "http://icon-park.com/imagefiles/simple_weather_icons2_snow.png", "http://icon-park.com/imagefiles/simple_weather_icons_thunderstorms.png", ];

    this.getWeather = function (location) {
        return $http.get(locationUrl + location + "&sensor=true", {
            headers: {
                "X-Mashape-Key": "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U"
            }
        }).then(function (response) {
            self.lat = response.data.results[0].geometry.location.lat;
            self.lng = response.data.results[0].geometry.location.lng;
            return $http.get(forecastUrl + self.lat + "&lng=" + self.lng, {
                headers: {
                    "X-Mashape-Key": "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U"
                }
            });
        }).then(function (response) {
            self.title = response.data.query.results.channel.description;
            self.conditionCode = response.data.query.results.channel.item.forecast[0].code;
            self.conditions = response.data.query.results.channel.item.forecast[0].text;
            self.humidity = "Humidity: " + response.data.query.results.channel.atmosphere.humidity;
            self.sunrise = "Sunrise: " + response.data.query.results.channel.astronomy.sunrise;
            self.sunset = "Sunset: " + response.data.query.results.channel.astronomy.sunset;
            var celcius = parseInt(response.data.query.results.channel.item.condition.temp);
            var fahrenheit = Math.floor((celcius * 9) / 5 + 32);
            self.temperature = fahrenheit + " F°";
        });
    }

    this.getForecast = function () {
        return $http.get(forecastUrl + self.lat + "&lng=" + self.lng, {
            headers: {
                "X-Mashape-Key": "QD2LX19LGAmshaZLifYLtavC8xSVp1udH9qjsnlk73Ix5jTx8U"
            }
        }).then(function (response) {
            self.forecastList = response.data.query.results.channel.item.forecast;
            self.tenDayTitle = "10 Day Forecast";
            self.condition = "Condition:"
            self.high = "High:";
            self.days = "Day:";
            self.low = "Low:";
            self.date = "Date:";
        });
    }
}]);