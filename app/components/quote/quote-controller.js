(function () {
	//Get your QuoteService
	var qs = new QuoteService

	new Vue({
		el: '#quote',
		data: {
			quote: ''
		},
		mounted: function () {
			qs.getQuote(this.setQuote)
		},
		methods: {
			setQuote: function (quote) {
				this.quote = JSON.parse(quote)
			}
		}
	})
} ())
