import axios from "axios";

const requestAxios = axios.create({
    baseURL:process.env.VUE_APP_URL,
    headers:{'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))}
})

export default requestAxios