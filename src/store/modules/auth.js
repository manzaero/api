import axios from "axios";
import {error} from "@/utils/error";
const JWT_TOKEN = 'jwt-token'
const API_URL = `https://test.octopus.uz/api/v1/auth`

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
                const apiToken = await axios.post(`${API_URL}/login`, payload)
                commit('setToken', apiToken.data.access_token)
                console.log('Вошёл')
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
                const regToken = axios.post(`${API_URL}/register`, payload)
                console.log()
            }catch (e) {
                console.dir(e)
            }
            // commit('setToken', 'TEST TOKEN')
        },
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