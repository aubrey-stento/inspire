import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

let temp = 0


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {

			temp = weather.main.temp
			console.log(weather);
			//What can you do with this weather object?

		temp = (temp - 273.15) * 9/5 +32

			document.getElementById("weather").innerText = Math.floor(temp) + '°'
		})
	}
}
