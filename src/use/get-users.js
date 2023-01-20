import axios from "axios";
import {ref} from "vue";

export function getUsers() {
    let users = ref('')
    axios.get('https://test.octopus.uz/api/v1/users', {
        headers: {
            'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))
        }
    })
        .then(res => {
            users.value = res.data.data
        })
    console.log(users)
    return {
        users,
        getUsers
    }
}