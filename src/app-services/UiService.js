import BaseService from "./BaseService";

class UiService extends BaseService {
    constructor(options) {
        super(options);
    }

    getName() {
        return 'ui';
    }

    get navigationMenu() {
        if(!this.$services.store.state.main)
            return {};
        return this.$services.store.state.main.ui.navigationMenu;
    }

    get appBar() {
        if(!this.$services.store.state.main)
            return {};
        return this.$services.store.state.main.ui.appBar;
    }


    toggleNavigationMenu(isVisible) {
        if (isVisible === undefined)
            isVisible = !this.$services.store.state.main.ui.navigationMenu.isVisible;
        this.$services.vue.Store.dispatch('main/toggleUiModule', {module: "navigationMenu", isVisible})
    }

    toggleAppBar(isVisible) {
        if (isVisible === undefined)
            isVisible = !this.$services.store.state.main.ui.appBar.isVisible;
        this.$services.vue.Store.dispatch('main/toggleUiModule', {module: "appBar", isVisible})
    }

    installModuleMenuItems(module) {
        const self = this;
        const routePrefix = this.$services.nav.options.router.prefix;
        module.getMenuItems().forEach(m => {
            m.id = m.id === 0 ? 0 : (module.getName() + '_' + m.id);
            m.url = `/${routePrefix}/${m.url}`;
            m.parentId = m.parentId === 0 ? 0 : (module.getName() + '_' + m.parentId);
            self.$services.vue.Store.dispatch('main/pushMenuItem', m);
        });
    }
}

export default UiService;
