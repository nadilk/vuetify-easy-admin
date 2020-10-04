import Vue from "vue";
import EasyPlugin from "./plugins/EasyPlugin";
import services from "./plugins/services";

function EasyAdmin(adminModules, adminServices) {
    const EasyPlugin = new EasyPlugin(Vue);
    const pluginServices = services(adminModules, adminServices);

    Vue.use(EasyPlugin, {services: pluginServices});

    const vueOptions = EasyPlugin.getVueOptions();

    return new Vue({
        el        : '#app',
        components: {App},
        ...vueOptions
    });
}
