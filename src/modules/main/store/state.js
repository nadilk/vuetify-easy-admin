const token = localStorage.getItem('service-token');

export default {
    auth: {
        token: token,
    },
    ui  : {
        navigationMenu: {
            isVisible: false,
            items    : []
        },
        appBar        : {
            isVisible: false
        }
    }
}
