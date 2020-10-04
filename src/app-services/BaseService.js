class BaseService {
    constructor(options){
        this.$services = options.$services
        this.options = options;
    }

    init(){
        throw Error("Cannot init base class! Make a child class.")
    }

    onServicePluginInitComplete(){

    }

    getName(){
        return "base";
    }
}

export default BaseService;
