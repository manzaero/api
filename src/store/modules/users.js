import axios from "axios";
const JWT_TOKEN = 'jwt-token';

export default {
    namespaced: true,
    state(){
        return {
            users: []
        }
    },
    getters:{
        users(state){
            return state.users
        }
    },
    mutations:{
        updateUsers(state, users){
            state.users = users
        }
    },
    actions:{
        async getUsers({commit}, pageNumber){
            try {
                await axios.get(`${process.env.API_URL}/users?page=${pageNumber}`, {
                    headers: {
                        'Authorization': `bearer ` + JSON.parse(localStorage.getItem(JWT_TOKEN))
                    }
                })
                    .then(usersApi => {
                        let users = usersApi.data.data;
                        let links = usersApi.data.links;
                        commit('updateUsers', users);
                        console.log(links)
                    })
            } catch (e) {
                console.log(e.message)
            }
        }
    }
}
