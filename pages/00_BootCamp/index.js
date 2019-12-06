let app = new Vue({
	el: '#app-1',
	data: {
		message: 'Hello Vue!'
	}
})

new Vue({
	el: '#app-2',
	data: {
		msg: 'You loaded this page on - ' + new Date().toLocaleString
	}
})

new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

new Vue({
	el: '#app-4',
	data: {
		list: [
			{ text: 'Learn Javascript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
})

new Vue({
	el: '#app-5',
	data: {
		rmsg: 'Hello!!'
	},
	methods: {
		reverseMessage: function(){
			this.rmsg = this.rmsg.split('').reverse().join('')
		}
	}
})


new Vue({
	el: '#app-6',
	data: {
		msg: 'input any key'
	}
})
