import Route from './route';

let __tidyRoutesInstance = null;

class TidyRoutes {

    constructor() {

        if (!__tidyRoutesInstance) {
            this.routes = new Map();
            __tidyRoutesInstance = this;
        }

        return __tidyRoutesInstance;
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
        })

        return routes
    }

    route(path, options) {

        if (this.routes.has(path)) {
            return this.routes.get(path);
        }

        let route = new Route(path, options);

        this.routes.set(path, route);

        return route;
    }
}

export default new TidyRoutes();
