import axios from "axios";

let token = localStorage.getItem('jwt-token')
const requestAxios = axios.create({
    baseURL:process.env.VUE_APP_URL,
    headers: {
        'Authorization': `bearer ` + JSON.parse(token)
    }
})

export default requestAxios