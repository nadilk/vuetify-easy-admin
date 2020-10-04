import store from "./store";
import vuetify from "./vuetify";
import router from "./router";

class EasyPlugin {
    constructor(Vue) {
        this.services = Vue.observable({
            vue:{

            }
        });

        this.initVue(Vue);
    }

    initVue(Vue){
        this.services.vue = {
            Vue,
            Store: store,
            Router: router,
            Vuetify: vuetify
        };
    }

    install(Vue, options) {
        this.initServices(options.services);
    }

    getVueOptions(){
        return {
            store: this.services.vue.Store,
            vuetify: this.services.vue.Vuetify,
            router: this.services.vue.Router
        }
    }

    initServices(installServices) {
        const Services = this.services;
        const {Vue} = Services.vue;

        Vue.$services = Vue.prototype.$services = this.services;

        for (let installService of installServices) {
            const serviceOptions = {$services: Services, ...installService.options};
            const serviceObj = new installService.class(serviceOptions);
            serviceObj.init();
            Vue.set(this.services, serviceObj.getName(), serviceObj);
        }

        for(let service in Services) {
            Services[service].onServicePluginInitComplete();
        }
    }


}

export default EasyPlugin;
