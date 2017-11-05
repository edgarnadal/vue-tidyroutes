
import VueTidyRoutes from 'vue-tidyroutes';

const Component1 = { template: '<div><h2>Component1</h2></div>' };

VueTidyRoutes.route('/component1', {
	name: 'component1',
	component: Component1
});

export default Component1;
