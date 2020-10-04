import BaseService from "./BaseModule";
import PassThrough from "../components/PassThrough";

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
        this.modules.forEach(this.installAdminModule);
    }

    installAdminModule(module){
        this.$services.store.installModuleStore(module);
        this.$services.nav.installModuleRoutes(module);
        this.$services.ui.installModuleMenuItems(module);
    }
}

export default AdminModuleService;
