(function () {

	var wc = this;
	var weatherService = new WeatherService();

	// weatherService.getWeather(function (weather) {
	// console.log(weather);
	//What can you do with this weather object?

	new Vue({
		el: '#weather',
		data: {
			weather: {},
			temp: 0,
			// tempC: 0,
			tempF: 0,
			name: ''
		},
		mounted: function () {
			weatherService.getWeather(this.setWeather)

		},
		methods: {
			setWeather: function (weather) {
				this.weather = JSON.parse(weather)
				// this.temp = weather.main.temp;
				// this.tempC = this.temp - 273.15
				// this.tempF = (this.temp * 9 / 5) - 459.67
			}
		},
		computed: {
			displayWeather: function () {
				if (this.weather.main) {
					return { temp: (this.weather.main.temp - 273.15).toFixed(2) }
				}
				return { temp: 'whoops ...out of luck' }
				// displayWeather(this.convertTemp)
			},
			displayTown: function () {
				if (this.weather.name) {
					return { name: this.weather.name }
				}
				return { name: 'error...there is no name' }
			}
			// convertTemp: function () {
				
			// 	if ({task: this.weather.main.temp, completed: false}) {
			// 		return { temp: this.weather.main.temp }
			// 	}
			// 	return {
			// 		temp: (this.weather.main.temp * 9 / 5) + 32
			// 	}
				
			// },
			// toggleTemp: function(temp){
			// 	this.temp = !this.temp
			// }

		}

	})

}())

