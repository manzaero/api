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
        async create({commit}, payload){
            try {
                const token = store.getters["api/token"]
                const {data} = await axios.post(`/category?auth=${token}`)
                console.log(data)
            } catch (e) {
                
            }
        }
    }
}