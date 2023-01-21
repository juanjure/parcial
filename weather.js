let londresWeather = {
    "coord": {
        "lon": -0.13,
        "lat": 51.51
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n",
            "pilotAffected" : [ { "name" :"Peter","age":15 }, {"name" :"Natalie","age":25 }, {"name" :"Mike","age":18}]
        }
    ],
    "base": "stations",
    "main": {
        "temp": 280.32,
        "feels_like": 275.34,
        "temp_min": 279.15,
        "temp_max": 281.15,
        "pressure": 1012,
        "humidity": 81
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.1,
        "deg": 80
    },
    "clouds": {
        "all": 75
    },
    "dt": 1485789600,
    "sys": {
        "type": 1,
        "id": 5091,
        "country": "GB",
        "sunrise": 1485762037,
        "sunset": 1485794875
    },
    "timezone": 0,
    "id": 2643743,
    "name": "London",
    "cod": 200
}

module.exports = londresWeather
