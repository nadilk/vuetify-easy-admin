function setObjectPropByPath(obj, path, value) {
    let currentObject = obj;
    let pathNodes = path.split(".");
    let currentPathNode = pathNodes[0];
    for (let i = 0; i < pathNodes.length - 1; i++) {
        if (!currentObject) {
            throw Error('Нельзя задавать свойства null объекта');
        } else if (currentObject[currentPathNode] === undefined && currentObject[currentPathNode] === null) {
            currentObject[currentPathNode] = {};
        }

        currentObject = currentObject[currentPathNode];
        currentPathNode = pathNodes[i + 1];
    }

    currentObject[currentPathNode] = value;

    return obj;
}

export default {

    pushMenuItem(state, payload) {
        state.app.ui.navigationMenu.items.push(payload);
    },

    toggleUiModule(state, {module, isVisible}) {
        state.app.ui[module].isVisible = isVisible;
    },

    setServiceToken(state, payload) {
        localStorage.setItem('service-token', payload);
        console.log(payload);
        state.app.auth.token = payload;
    }
}
