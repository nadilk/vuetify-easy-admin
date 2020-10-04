import BaseService from "./BaseService";
import PassThrough from "../components/PassThrough";

class NavigationService extends BaseService {
    getName() {
        return "nav"
    }

    navigate(payload) {
        if(payload) {
            if (typeof payload === 'string') {
                payload = {path: payload};
            }
            if (payload.path && payload.path[0] === '/') {
                payload.path = `/${this.options.router.prefix}/${module.getName}${payload.path}`;
            }
        }

        this.$services.vue.Router.push(payload);
    }

    installModuleRoutes(module) {
        this.$services.vue.Router.addRoutes([this.makeModuleRoutes(module)]);
    }

    makeModuleRoutes(module) {
        const routePrefix = this.options.router.prefix;

        const makeRoute = function (route) {
            if (route.name) {
                route.name = module.getName() + "." + route.name;
            }
            if (route.children) {
                route.children.forEach(function (childRoute) {
                    makeRoute(childRoute,);
                })
            }
            return route;
        };
        const moduleRoutes = module.getRoutes().map(makeRoute);

        return {
            path     : `/${routePrefix}/${module.getName()}/`,
            children : moduleRoutes,
            component: PassThrough
        };
    }
}

export default NavigationService;
