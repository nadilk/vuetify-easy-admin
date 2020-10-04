import StoreService from "../app-services/StoreService";
import PluginsService from "../app-services/PluginsService";
import AuthService from "../app-services/AuthService";
import UiService from "../app-services/UiService";
import AdminModuleService from "../app-services/AdminModuleService";
import NavigationService from "../app-services/NavigationService";
import main from "../modules/main"

const services = function (modules, services) {
    services = services||[];
    modules = modules||[];
    return [
        {
            class  : AdminModuleService,
            options: {
                modules: [
                    new main(),
                    ...modules
                ]
            }
        },
        {
            class  : StoreService,
            options: {}
        },
        {
            class  : PluginsService,
            options: {
                plugins: {}
            }
        },
        {
            class  : AuthService,
            options: {
                baseUrl: "https://online.nsk.kz/auth"
            }
        },
        {
            class  : UiService,
            options: {}
        },
        {
            class  : NavigationService,
            options: {
                router: {
                    prefix: 'admin-service'
                }
            }
        },
        ...services
    ];
};
export default services;
