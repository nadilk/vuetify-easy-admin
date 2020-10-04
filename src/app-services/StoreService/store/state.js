const token = localStorage.getItem('service-token');

export default {
    app :  {
        auth: {
            token: token,
        },
        ui  : {
            navigationMenu: {
                isVisible: false,
                items    : [
                    {
                        id        : 1,
                        text      : "Главная",
                        icon      : "",
                        url       : "/admin-service/main/",
                        isExpanded: false,
                        parentId  : 0
                    }
                ]
            },
            appBar        : {
                isVisible: false
            }
        }
    }
}
