import BaseService from "./BaseService";

class PluginsService extends BaseService {
    constructor(options) {
        super(options);
    }

    getName() {
        return "plugins";
    }

    init() {
        const Vue = this.$services.vue.Vue;
        for (let name in this.options.plugins) {
            Vue.set(this, name, this.options.plugins[name]);
        }
        Vue.$plugins = Vue.prototype.$plugins = this;
    }
}

export default PluginsService;
