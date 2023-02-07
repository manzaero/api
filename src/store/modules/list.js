import axios from "axios";

export default {
    namespaced: true,
    setup(){
        return {
            list: []
        }
    },
    getters:{
        list(state){
            return state.list
        }
    },
    mutations:{
        loadList(getters, list){
            getters.list = list
        }
    },
    actions:{
        async getList({commit}){
            const list = axios.get('https://test.octopus.uz/api/v1/category/list', {
                headers:{
                    'Authorization': `brear ` + JSON.parse(localStorage.getItem('jwt-token'))
                }
            })
        }
    }
}