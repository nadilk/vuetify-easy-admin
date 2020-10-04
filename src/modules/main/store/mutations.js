export default {

    pushMenuItem(state, payload) {
        state.ui.navigationMenu.items.push(payload);
    },

    toggleUiModule(state, {module, isVisible}) {
        state.ui[module].isVisible = isVisible;
    },

    setServiceToken(state, payload) {
        localStorage.setItem('service-token', payload);
        console.log(payload);
        state.auth.token = payload;
    }
}
