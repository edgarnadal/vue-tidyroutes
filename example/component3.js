import Vue from 'vue'
import VueTidyRoutes from 'vue-tidyroutes'

const ChildComponent3 = { template: '<div>child component 3</div>' }

VueTidyRoutes.path('/component2')
    .child('child-3', {
        name: 'child-3',
        component: ChildComponent3
    });

export default ChildComponent3
