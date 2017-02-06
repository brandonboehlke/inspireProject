function ImageService() {
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function () {
		return fetch(apiUrl)
			.then(res => res.json())
	}
}
// 	this.getImage = function (callWhenDone) {
// 		// ^^^^^^^ How do you use this?
// 		var i = localStorage.getItem('image')
// 		if(i){
// 			i = JSON.parse(i);
// 			console.log('Image Data:', i)
// 			return callWhenDone(i)
// 		}

// 		return $.get(apiUrl, function (res) {
// 			console.log('Image Data:', res)
// 			localStorage.setItem('image',JSON.stringify(res))
// 			callWhenDone(res)
// 			//What are you going to do with the image that comes back?

// 		})
// 	}
