import Vue from "vue";


export default {
    getMenuItem : (state) => (id) => {
        return state.ui.navigationMenu.items.find((item) => item.id === id);
    },
    getMenuItems: (state) => (parentId) => {
        parentId = parentId || 0;
        return state.ui.navigationMenu.items.filter((item) => item.parentId === parentId);
    }
}
