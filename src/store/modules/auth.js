import axios, {get} from "axios";
import {error} from "@/utils/error";
const JWT_TOKEN = 'jwt-token'
const API_URL = `https://test.octopus.uz/api/v1`

export default {
    namespaced: true,
    state(){
        return {
            users: [],
            categories:null,
            token: localStorage.getItem(JWT_TOKEN)
        }
    },
    mutations:{
        setToken(state, token){
            state.token = token
            localStorage.setItem(JWT_TOKEN, token)
        },
        logout(state){
            state.token = null
            localStorage.removeItem(JWT_TOKEN)
        },
        updateUsers(state, users){
            state.users = users
        },
        updateCategory(state, catApi){
            state.categories = catApi
        }
    },
    actions:{
        async login({commit, dispatch}, payload){
            try {
                const apiToken = await axios.post(`${API_URL}/auth/login`, payload)
                commit('setToken', JSON.stringify(apiToken.data.access_token))
                commit('clearMessage', null, {root: true})
            } catch (e) {
                dispatch('setMessage', {
                    value: error(e.message),
                    type: 'danger'
                }, {root: true})
                console.log(error(e.message))
                console.dir(e)
                throw new Error(e)
            }
        },
        async register({commit, dispatch}, payload){
            try {
                await axios.post(`${API_URL}/auth/register`, payload)
            }catch (e) {
                dispatch('setMessage', {
                    value: error(e.message),
                    type: 'danger'
                }, {root: true})
                console.log(error(e.message))
                throw new Error(e)
            }
        },
        async getUsers({commit}, pageNumber){
            try {
                await axios.get(`${API_URL}/users?page=${pageNumber}`, {
                    headers: {
                        'Authorization': `bearer ` + JSON.parse(localStorage.getItem(JWT_TOKEN))
                    }
                })
                    .then(usersApi => {
                        let users = usersApi.data.data
                        commit('updateUsers', users)
                    })
            } catch (e) {
                console.log(e.message)
            }
        },
        async getCat({commit}){
            try {
                await axios.get('https://test.octopus.uz/api/v1/category',{
                    headers:{
                        'Authorization': `bearer ` + JSON.parse(localStorage.getItem(JWT_TOKEN))
                    }
                })
                    .then(getCatFromApi => {
                        let catApi = getCatFromApi.data.data;
                        commit('updateCategory', catApi);
                        console.log(catApi)
                    })
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters:{
        token(state){
            return state.token
        },
        isAuth(_, getters){
            return !!getters.token
        },
         users(state){
            return state.users
        },
        categories(state){
            return state.categories
        }
    }
}