import BaseService from "../BaseService";
import store from "./store"

class StoreService extends BaseService {
    constructor(options) {
        super(options);
        this.appStore = options.appStore || store;
    }

    getName() {
        return "store";
    }

    onServicePluginInitComplete() {

    }

    installModuleStore(module){
        const moduleStore = module.getStore();
        if(moduleStore){
            this.$services.vue.Store.registerModule(module.getName(),module.getStore());
        }
    }

    init() {
        const Store = this.$services.vue.Store;
        Store.registerModule("app",this.appStore);
        this.store = Store.state;
    }
}

export default StoreService;
