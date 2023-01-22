import {ref} from "vue";
import store from "@/store";

export function getUsers() {
    let users = ref('')

    const getUsers = async () => {
        await store.dispatch("auth/getUsers")
            .then(res => {
                users.value = res.data.data
                console.log(res)
            })
    }

    return {
        users,
        getUsers
    }
}