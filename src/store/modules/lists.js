import axios from "axios";
const API_URL = `https://test.octopus.uz/api/v1`
export default {
    namespaced: true,
    state(){
        return {
            list: null
        }
    },
    getters:{
        getList(state){
            return state.list
        }
    },
    mutations:{
        loadList(getters, list){
            getters.getList = list
        }
    },
    actions:{
        async getListApi({commit}){
            await axios.get(`${API_URL}/category/list`, {
                headers:{
                    'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))
                }
            })
                .then(res => {
                    let list = res.data.data;
                    commit('loadList', list)
                    console.log(list)
                })
        }
    }
}