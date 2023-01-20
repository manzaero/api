import axios from "axios";
import {ref} from "vue";

export function getUsers() {

    try {
        const getUsers = axios.get('https://test.octopus.uz/api/v1/users', {
            headers: {
                'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))
            }
        })
            .then(res => {
                users.value = res.data.data
            })
    } catch (e) {
        console.log(e.message)
    }
    let users = ref('')
    return {
        users,
        getUsers
    }
}