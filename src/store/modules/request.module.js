import axios from "@/axios/request";
import store from "@/store";

export default {
    namespaced: true,
    state() {
        return {
            requests:[],
            Owner:{
                FirstName: null,
                LastName: null,
                Email: null,
                Phone: null
            }
        };
    },
    getters:{
        requestsState(state){
            return state.requests
        },
        firsNameState(state){
            return state.Owner.FirstName
        },
        lastNameState(state){
            return state.Owner.LastName
        },
        emailState(state){
            return state.Owner.Email
        },
        phoneState(state){
            return state.Owner.Phone
        }
    },
    mutations:{
        setRequest(getters, requests){
            getters.requestsState = requests
        },
        setFirstName(getters, firsNameState){
            getters.firsNameState = firsNameState
        },
        setLastName(getters, lastNameState){
            getters.lastNameState = lastNameState
        },
        setEmail(getters, emailState){
            getters.emailState = emailState
        },
        setPhone(getters, phoneState){
            getters.phoneState = phoneState
        },
    },
    actions:{
        async create({commit, dispatch}, payload){
            try {
                const token = store.getters["api/token"]
                const {data} = await axios.post(`/category`, payload, {
                    headers:{
                        'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))
                    }
                })
                console.log(payload)
                console.log(data)
                dispatch('setMessage', {
                    value: 'Категория успешно создана!',
                    type: 'primary'
                }, {root: true})
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        }
    }
}