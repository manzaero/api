<template>
  <div class="card">
    <div class="card-title">
      {{test}}
    </div>
    <hr>
    <div class="card" v-for="user in users" :key="user.id">
      <div class="card">
        <ul>
          <li>{{user.name}}</li>
          <li>{{user.username}}</li>
          <li>{{user.email}}</li>
        </ul>
      </div>
    </div>
    <button class="btn danger" @click="getUsers">Load</button>
  </div>
</template>

<script>
import axios from "axios";

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
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
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