

class BaseAdminModule {


    constructor(options) {
        this.options = options;
    }

    setServices(services){
        this.$services = services;
    }

    postInstall(){

    }

    get name(){
        return this.getName();
    }

    get func(){
        return this.$services.vue.Vue.$modules[this.name];
    }


    getName() {

    }

    getRoutes() {

    }

    getMenuItems() {

    }

    getStore(){

    }

    getFacade(){
        return {}
    }

    getModuleFacades(){
        return this.$services.vue.Vue.$modules;
    }
}

export default BaseAdminModule;
