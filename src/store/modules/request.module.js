import api from "@/axios/api";

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
                const {data} = await api.post(`/category`, payload)
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