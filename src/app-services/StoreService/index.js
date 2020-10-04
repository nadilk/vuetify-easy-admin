import BaseService from "../BaseService";

class StoreService extends BaseService {
    constructor(options) {
        super(options);
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
        const {Vue,Store} = this.$services.vue;

        this.state = Store.state;
        Vue.$appState = Vue.prototype.$appState = this.appState;
    }

    get appState(){
        return this.state;
    }
}

export default StoreService;
