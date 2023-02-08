import axios from "axios";
import list from "@/views/List.";

export default {
    namespaced: true,
    setup(){
        return {
            list: []
        }
    },
    getters:{
        getList(state){
            return state.list
        }
    },
    mutations:{
        loadList(getters, listLoad){
            getters.getList = listLoad
        }
    },
    actions:{
        async getListApi({commit}){
            await axios.get('https://test.octopus.uz/api/v1/category/list', {
                headers:{
                    'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))
                }
            })
                .then(list => {
                    let listLoad = list;
                    commit('loadList', listLoad.data.data)
                    console.log(listLoad.data.data)
                })
        }
    }
}