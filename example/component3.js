
import Routes from 'vue-tidyroutes';

const ChildComponent3 = { template: '<div>child component 3</div>' };
const ChildComponent4 = { template: '<div>child component 4</div>' };

Routes.route('/component2')
    .child('child-3', {
        name: 'child-3',
        component: ChildComponent3
    })
    .child('child-4', {
        name: 'child-4',
        component: ChildComponent4
    });

export default ChildComponent3;
