import axios from "axios";
const API_URL = `https://test.octopus.uz/api/v1`
export default  {
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
            await axios.get(`${API_URL}/category`,{
                headers:{
                    'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))
                }
            })
                .then(res => {
                    let cat = res.data.data;
                    let links = res.data.links;
                    commit('loadCat', cat);
                    console.log(cat);
                    console.log(links.first)
                })
        }
    }
}