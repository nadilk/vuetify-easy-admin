import BaseAdminModule from "../BaseAdminModule";
import routes from "./routes";
import menuItems from "./menuItems";
import store from "./store";

class MainAdminModule extends BaseAdminModule {
    getName() {
        return "main";
    }

    getRoutes() {
        return routes;
    }

    getMenuItems() {
         return menuItems;
    }

    getStore() {
        return store;
    }
}

export default MainAdminModule;
