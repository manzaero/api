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
      return state.users || []
    },
    lists(state){
      return state.lists
    },
    page(state){
      return state.page
    },
    total(state){
      return Math.ceil(state.total / 10)
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
    loadCat(state, cat){
      state.categories = cat
    },
    loadList(state, list){
      state.lists = list
    },
    totalItem(state, total){
      state.total = total
    },
    updateUsers(state, users){
      state.users = users
    }
  },
  actions: {
    setMessage({commit}, message){
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 5000)
    },
    async login({ commit, dispatch }, payload) {
      try {
        const res = await api.get(`/users?Phone=${payload.Phone}&Password=${payload.Password}`)
        const users = res.data

        if (users.length === 0) {
          throw new Error('Неверный email или пароль')
        }

        const fakeToken = btoa(`${users[0].Phone}:${users[0].Password}`)

        commit('setToken', JSON.stringify(fakeToken))
        commit('clearMessage')
        dispatch('setMessage', {
          value: 'Успешный вход!',
          type: 'success'
        })
      } catch (e) {
        dispatch('setMessage', {
          value: error(e.message),
          type: 'danger'
        })
        throw new Error(e)
      }
    }
    ,
    async getCategory({commit}){
      try {
        await api.get(`/categories`)
            .then(res => {
              let cat = res.data;
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
        await api.post(`/users`, payload)
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
        const response = await api.get(`users?page=${pageNumber}`)
        const users = response.data.items
        const total = response.data.meta.total_items

        commit('updateUsers', users)
        commit('totalItem', total)
      } catch (e) {
        if (e.response?.status === 401) {
          alert('Сессия истекла, пожалуйста авторизируйтесь!')
          return router.push('/auth')
        }
        console.log(e)
      }
    },
    async getListApi({commit}){
      try {
        await api.get(`categories`)
            .then(res => {
              let list = res.data;
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
