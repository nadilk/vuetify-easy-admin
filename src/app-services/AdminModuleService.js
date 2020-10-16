import BaseService from "./BaseService";

class AdminModuleService extends BaseService {
    constructor(options) {
        super(options);
        this.modules = options.modules;
        this.modulesDictionary = {};
    }

    init(){
        const {Vue} = this.$services.vue;
        Vue.$modules = Vue.prototype.$modules = this.modulesDictionary;
    }

    getName() {
        return "admin_modules";
    }

    onServicePluginInitComplete() {
        this.installAdminModules();
    }

    installAdminModules() {
        this.modules.forEach((module) => this.installAdminModule(module));
        this.modules.forEach((module) => this.postInstallAdminModule(module));
    }

    installAdminModule(module) {
        module.setServices(this.$services);
        this.modulesDictionary[module.getName()] = module.getFacade();
        this.$services.store.installModuleStore(module);
        this.$services.nav.installModuleRoutes(module);
        this.$services.ui.installModuleMenuItems(module);
    }

    postInstallAdminModule(module){
        module.postInstall();
    }
}

export default AdminModuleService;
