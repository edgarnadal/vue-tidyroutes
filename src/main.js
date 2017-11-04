import Vue from 'vue';
// const vue = require('vue');

let instance = null;

class TidyRoutes {

    constructor() {

        if (!instance) {
            this.routes = new Map();
            instance = this;
        }

        return instance;
    }

    export() {

        let routes = [];

        this.routes.forEach((option, path) => {

            let route = this.routes.get(path);
            let options = route.options;

            options.children = [];

            for (let path in route.children) {
                let child = route.children[path];

                options.children.push(Object.assign({
                    path: path
                }, child));
            }

            routes.push(Object.assign({ path: path }, options));
        });

        return routes;
    }

    path(path, options) {

        if (this.routes.has(path)) {
            return this.routes.get(path);
        }

        let route = new Route(path, options);

        this.routes.set(path, route);

        // return this.routes.get(path);
        return route;
    }

}

/**
 * Single route class
 */
class Route {
    constructor(path, options) {
        this.path = path;
        this.options = options;
        this.children = {};
    }

    children(path, options) {
        this.children[path] = options;
        return this;
    }
}

export default new TidyRoutes();
