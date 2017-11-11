
export default class Route {

    constructor(path, options) {

        this.path = path;
        this.options = options;
        this.children = {};

        if (options.hasOwnProperty('children')) {

            for(let path in options.children) {
                this.child(path, options.children[path]);
            }

            delete options.children;
        }

        return options.component;
    }

    child(path, options) {
        this.children[path] = options
        return this;
    }
}
