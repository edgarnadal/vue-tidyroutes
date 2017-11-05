# vue-tidyroutes plugin
VueJS routes definitions that can be created anywhere in your project.

## Under the hood
It's just a singleton object that store all your routes for future export to the vue-router.

## Install
```js
npm install --save vue-tidyroutes
```

## Example
> app.js
```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTidyRoutes from 'vue-tidyroutes';

import './component1'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: VueTidyRoutes.export()
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

```

> component1.js
```js
import VueTidyRoutes from 'vue-tidyroutes';

const Component1 = { template: '<div><h2>Component1</h2></div>' };

VueTidyRoutes.route('/component1', {
    name: 'component1',
    component: Component1
});

export default Component1;
```

## Usage

`VueTidyRoutes.route(path, options)`
`VueTidyRoutes.route(path)`
`VueTidyRoutes.route(path).child(path, options)`

*Create a route:*

`VueTidyRoutes.route(path, options)`

```js
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

let route1 = VueTidyRoutes.route('/foo', {
    component: Foo
})

let route2 = VueTidyRoutes.route('/bar', {
    component: Bar
})
```

*Nested routes:*

There are two ways to define nested routes

```js
const Foo = { template: '<div>foo<router-view></router-view></div>' }
const Bar = { template: '<div>bar</div>' }

VueTidyRoutes.route('/foo', {
    component: Foo
})

VueTidyRoutes.route('/foo').child('/bar', {
    component: Bar
})
```

```js
const Foo = { template: '<div>foo<router-view></router-view></div>' }
const Bar = { template: '<div>bar</div>' }

VueTidyRoutes.route('/foo', {
    component: Foo,
    children: {
        '/bar': {
            component: Bar
        }
    }
})
```

Detailed example at [/example](https://github.com/edgarnadal/vue-tidyroutes/tree/master/example)
To run the example just: `npm run example`

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

