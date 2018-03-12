
export default class Route {

    constructor(path, options) {
        this.path = path;
        this.options = options || {};
        this.children = {};

        if (this.options.hasOwnProperty('children')) {

            for(let path in this.options.children) {
                this.child(path, this.options.children[path]);
            }

            delete this.options.children;
        }

        return this;
    }

    child(path, options) {
        this.children[path] = options;
        return this;
    }
}
