import { createStore, createLogger } from 'vuex'
import request from "@/store/modules/request.module";
import api from "@/axios/api";
import {error} from "@/utils/error";
import router from "@/router";
const JWT_TOKEN = 'jwt-token'

const plugins = []

if (process.env.NODE_ENV === 'development'){
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state(){
    return {
      message: null,
      users: [],
      token: localStorage.getItem(JWT_TOKEN),
      categories: null,
      lists: null,
      page: 1,
      total: 0
    }
  },
  getters:{
    token(state){
      return state.token
    },
    isAuth(_, getters){
      return !!getters.token
    },
    categories(state){
      return state.categories
    },
    users(state){
      return state.users
    },
    lists(state){
      return state.lists
    },
    page(state){
      return state.page
    },
    total(state){
      return state.total / 15
    }
  },
  mutations: {
    setMessage(state, message){
      state.message = message
    },
    clearMessage(state){
      state.message = null
    },
    setToken(state, token){
      state.token = token
      localStorage.setItem(JWT_TOKEN, token)
    },
    logout(state){
      state.token = null
      localStorage.removeItem(JWT_TOKEN)
    },
    loadCat(getters, cat){
      getters.categories = cat
    },
    loadList(getters, list){
      getters.getLists = list
    },
    updateUsers(state, users){
      state.users = users
    },
    totalItem(getters, total){
      getters.total = total
    }
  },
  actions: {
    setMessage({commit}, message){
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 5000)
    },
    async login({commit, dispatch}, payload){
      try {
        const apiToken = await api.post(`auth/login`, payload);
        commit('setToken', JSON.stringify(apiToken.data.access_token));
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
    async getCategory({commit}){
      try {
        await api.get(`category`)
            .then(res => {
              let cat = res.data.data;
              commit('loadCat', cat);
              console.log(cat)
            })
      } catch (e) {
        if (e.response.status === 401){
          alert('Сессия истекла, пожалуйста авторизируйтесь!')
          return router.push('/auth')
        }
        console.log(e)
      }

    },
    async register({commit, dispatch}, payload){
      try {
        await api.post(`auth/register`, payload)
      } catch (e) {
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
        await api.get(`users?page=${pageNumber}`)
            .then(usersApi => {
              let users = usersApi.data.data;
              let total = usersApi.data.meta.total;
              commit('updateUsers', users);
              commit('totalItem', total);
            })
      } catch (e) {
        if (e.message.length){
          alert('Сессия истекла, пожалуйста авторизируйтесь!')
          return router.push('/auth')
        }
        console.log(e.message)
      }
    },
    async getListApi({commit}){
      try {
        await api.get(`category/list`)
            .then(res => {
              let list = res.data.data;
              commit('loadList', list);
              console.log(list)
            })
      } catch (e) {
        if (e.message.length){
          alert('Сессия истекла, пожалуйста авторизируйтесь!')
          console.log(e)
        }
        console.log(e.message)
      }

    }
  },
  modules: {
    request
  }
})
