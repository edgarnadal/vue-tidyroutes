import Vue from 'vue'
import VueTidyRoutes from 'vue-tidy-routes'

const Component1 = { template: '<div><h2>Component1</h2></div>' }

VueTidyRoutes.path('/', {
	name: 'component1',
	component: Component1
})

export default Component1
