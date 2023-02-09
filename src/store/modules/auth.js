import axios, {get} from "axios";
import {error} from "@/utils/error";
const JWT_TOKEN = 'jwt-token'

export default {
    namespaced: true,
    state(){
        return {
            users: [],
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
                const apiToken = await axios.post(`auth/login`, payload)
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
                await axios.post(`auth/register`, payload)
            }catch (e) {
                dispatch('setMessage', {
                    value: error(e.message),
                    type: 'danger'
                }, {root: true})
                console.log(error(e.message))
                throw new Error(e)
            }
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