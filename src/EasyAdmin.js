import Vue from "vue";
import App from "./components/App"
import EasyPlugin from "./plugins/EasyPlugin";
import services from "./plugins/services";

function EasyAdmin(adminModules, adminServices) {
    const adminPlugin = new EasyPlugin(Vue);
    const pluginServices = services(adminModules, adminServices);

    Vue.use(adminPlugin, {services: pluginServices});

    const vueOptions = adminPlugin.getVueOptions();

    return new Vue({
        el        : '#app',
        components: {App},
        ...vueOptions
    });
}

export default EasyAdmin;
