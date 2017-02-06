(function () {
	//Your ImageService is a global constructor function what can you do here if you new it up?

	var imgS = new ImageService

	var vm = new Vue({
		el: '#backgroundImage',
		data: function () {
			return {
				image: {}
			}
		},
		mounted: function () {
			// imgS.getImage(this.setImage)
			imgS.getImage()
				.then(function (res) {
					vm.image = res
				})
		}
	})
} ())

			// })
		// },
		// methods:{
		// 	setImage: function(image){
		// 		this.image = JSON.parse(image)
		// 	}		
		// },
		// computed: {
		// 	displayImage: function(){
		// 		if (this.image == this.image){
		// 			return this.image.url
		// 		} 
		// 		return	{image: 'whoops.. cannot load image'}

		// 	}
		// }