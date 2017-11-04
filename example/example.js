import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTidyRoutes from 'vue-tidy-routes'

import './component1'
import 'component2'

Vue.use(VueRouter)
// Vue.use(VueTidyRoutes)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: Vue.$routes().all()
})

new Vue({

	router,

    el: '#app',

	template: `
	<div>
		<h1>Example</h1>
		<router-view></router-view>
	</div>
	`

})
