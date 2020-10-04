import BaseService from "./BaseService";

class AdminModuleService extends BaseService {
    constructor(options) {
        super(options);
        this.modules = options.modules;
    }

    getName() {
        return "admin_modules";
    }

    onServicePluginInitComplete() {
        this.installAdminModules();
    }

    installAdminModules() {
        this.modules.forEach((module) => this.installAdminModule(module));
    }

    installAdminModule(module) {
        this.$services.store.installModuleStore(module);
        this.$services.nav.installModuleRoutes(module);
        this.$services.ui.installModuleMenuItems(module);
    }
}

export default AdminModuleService;
