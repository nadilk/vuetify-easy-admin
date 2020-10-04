import BaseService from "./BaseService";

class AuthService extends BaseService{

    onServicePluginInitComplete() {
        this.checkAuthorization()
    }

    checkAuthorization(){
        if(this.$services.auth.isAuthorized){
            this.$services.ui.toggleAppBar(true);
        }
    }

    getName() {
        return 'auth';
    }

    login(credentials){
        if(credentials.email === 'admin'){
            this.$services.vue.Store.dispatch('main/setServiceToken','my-service-token');
            this.$services.nav.navigate({ name: "main.home" });
            this.$services.ui.toggleAppBar(true);
            return true;
        }else{
            throw new Error()
        }
    }

    logout(){
        this.$services.vue.Store.dispatch('main/setServiceToken','');
        this.$services.nav.navigate({ name: "main.auth" });
        this.$services.ui.toggleAppBar(false);
    }

    get isAuthorized(){
        if(!this.$services.store.state.main)
            return false;
        return !!this.$services.store.state.main.auth.token;
    }
}

export default AuthService;
