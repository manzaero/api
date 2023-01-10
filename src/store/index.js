import { createStore, createLogger } from 'vuex'
import auth from "@/store/modules/auth";

const plugins = []

if (process.env.NODE_ENV === 'development'){
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state(){
    return {
      message: null
    }
  },
  mutations: {
    setMessage(state, ){

    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
