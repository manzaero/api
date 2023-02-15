import axios from "@/axios/request";
import store from "@/store";

export default {
    namespaced: true,
    state() {
        return {
            requests:[]
        };
    },
    getters:{
        requestsState(state){
            return state.requests
        }
    },
    mutations:{
        setRequest(getters, requests){
            getters.requestsState = requests
        }
    },
    actions:{
        async create({commit, dispatch}, payload){
            try {
                const token = store.getters["api/token"]
                const {data} = await axios.post(`/category`, payload)
                console.log(data)
                dispatch('setMessage', {
                    value: 'Категория успешно создана!',
                    type: 'primary'
                }, {root: true})
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        }
    }
}