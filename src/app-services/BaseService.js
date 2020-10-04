class BaseService {
    constructor(options){
        this.$services = options.$services
        this.options = options;
    }

    init(){

    }

    onServicePluginInitComplete(){

    }

    getName(){
        return "base";
    }
}

export default BaseService;
