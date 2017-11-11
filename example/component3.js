
import Routes from 'vue-tidyroutes';

const ChildComponent3 = { template: '<div>child component 3</div>' };

Routes.route('/component2')
    .child('child-3', {
        name: 'child-3',
        component: ChildComponent3
    });

export default ChildComponent3;
