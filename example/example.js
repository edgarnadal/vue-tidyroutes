import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTidyRoutes from 'vue-tidyroutes';

import './component1';
import './component2';
import './component3';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: VueTidyRoutes.export()
});

new Vue({

    router,

    el: '#app',

    template: `
    <div>
        <h1>Example</h1>
        <router-view></router-view>
    </div>
    `
});
