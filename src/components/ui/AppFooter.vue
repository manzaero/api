<template>
  <div class="card">
    <div class="card-title">
      {{test}}
    </div>
    <hr>
    <div class="card" v-for="user in users" :key="user.id">
      <div class="card">
        <ul>
          <li>Name: {{user.name}}</li>
          <li>Username: {{user.username}}</li>
          <li>E-mail: {{user.email}}</li>
        </ul>
      </div>
    </div>
    <button class="btn danger" @click="getUsers">Load</button>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  props:{
    test:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      users: []
    }
  },
  methods:{
    async getUsers(){
      try {
        const token = {
          headers: {Authorization: `Bearer ${store.state["auth/token"]}`}
        };
        const params = {
          key: value
        }
        const response = await axios.get('https://test.octopus.uz/api/v1/users',
            {
              headers: {"Authorization": `Bearer ${token}`},
              key: "value"})
        this.users = response.data
        } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>