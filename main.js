const app = Vue.createApp({
	data() {
		return {
			cart: [],
			premium: true,
			details: true,
		}
	},
	methods: {
		updateCart(id) {
			this.cart += 1
		},
		removeFromCart(id) {
			this.cart -= 1
			// this.cart -= 1
		}
	}
})
