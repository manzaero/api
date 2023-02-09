import axios from "axios";

export default {
    namespaced: true,
    state(){
        return {
            categories: null,
        }
    },
    getters:{
        categories(state){
            return state.categories
        }
    },
    mutations:{
        loadCat(getters, cat){
            getters.categories = cat
        }
    },
    actions:{
        async getCategory({commit}){
            await axios.get(`category`,{
                headers:{
                    'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))
                }
            })
                .then(res => {
                    let cat = res.data.data;
                    commit('loadCat', cat);
                    console.log(cat)
                })
        }
    }
}