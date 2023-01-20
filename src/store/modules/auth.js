import axios from "axios";
import {error} from "@/utils/error";
const JWT_TOKEN = 'jwt-token'
const API_URL = `https://test.octopus.uz/api/v1`

export default {
    namespaced: true,
    state(){
        return {
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
        }
    },
    actions:{
        async login({commit, dispatch}, payload){
            try {
                const apiToken = await axios.post(`${API_URL}/auth/login`, payload)
                commit('setToken', JSON.stringify(apiToken.data.access_token))
                console.log('Вошёл')
                commit('clearMessage', null, {root: true})
            } catch (e) {
                dispatch('setMessage', {
                    value: error(e.message),
                    type: 'danger'
                }, {root: true})
                console.log(error(e.message))
                throw new Error()
            }
        },
        async register({commit}, payload){
            try {
                const regToken = axios.post(`${API_URL}/auth/register`, payload)
            }catch (e) {
                console.dir(e)
            }
            // commit('setToken', 'TEST TOKEN')
        },
        async getUsers({commit, dispatch}){
            await axios.get(`${API_URL}/users`, {
                headers: {
                    'Authorization': `bearer ` + JSON.parse(localStorage.getItem(JWT_TOKEN))
            }
            })
        }
    },
    getters:{
        token(state){
            return state.token
        },
        isAuth(_, getters){
            return !!getters.token
        }
    }
}