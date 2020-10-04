import axios from "axios"

const calcURL = process.env.MIX_API_URL + "calc-service/api";
const netURL = "https://online.nsk.kz/net-service/api/request"

export default {
    pushMenuItem({commit}, payload) {
        commit('pushMenuItem', payload);
    },
    async setServiceToken({commit}, payload) {
        commit("setServiceToken", payload);
    },

    toggleUiModule({state, commit}, payload) {
        commit("toggleUiModule", payload)
    }
}
