import BaseService from "./BaseModule";

class UiService extends BaseService {
    constructor(options) {
        super(options);
    }

    getName() {
        return 'ui';
    }

    get navigationMenu() {
        return this.$app.store.state.ui.navigationMenu;
    }

    get appBar() {
        return this.$app.store.state.ui.appBar;
    }


    toggleNavigationMenu(isVisible) {
        if (isVisible === undefined)
            isVisible = !this.$app.store.state.ui.navigationMenu.isVisible;
        this.$store.dispatch('toggleUiModule', {module: "navigationMenu", isVisible})
    }

    toggleAppBar(isVisible) {
        if (isVisible === undefined)
            isVisible = !this.$app.store.state.ui.appBar.isVisible;
        this.$store.dispatch('toggleUiModule', {module: "appBar", isVisible})
    }

    installModuleMenuItems(module) {
        const self = this;
        const routePrefix = this.$services.nav.options.router.prefix;
        module.getMenuItems().forEach(m => {
            m.id = m.id === 0 ? 0 : (module.getName() + '_' + m.id);
            m.url = `/${routePrefix}/${module.getName()}${m.url}`;
            m.parentId = m.parentId === 0 ? 0 : (module.getName() + '_' + m.parentId);
            self.$services.vue.Store.dispatch('pushMenuItem', m);
        });
    }
}

export default UiService;
