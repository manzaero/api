<template>
	<div class="card">
		<div class="card-title">
			{{ test }}
		</div>
		<hr>
		<div class="card" v-for="user in users" :key="user.id">
			<div class="card">
				<ul>
					<li>Name: {{ user.Phone }}</li>
					<li>Username: {{ user.FirstName }}</li>
					<li>E-mail: {{ user.Email }}</li>
				</ul>
			</div>
		</div>
		<button class="btn danger" @click="getUsers">Load</button>
    <button class="btn primary" @click="getTest">test</button>
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
      users: null
    }
  },
  methods:{
    getUsers(){
      const users = axios.get('https://test.octopus.uz/api/v1/users', {
        headers: {
          'Authorization': `bearer ${localStorage.getItem('jwt-token')}`
        }
      })
          .then((res) => {
            this.users = res.data.data
            console.log(res.data.data)
          })
    },
    getTest(){
      JSON.stringify(store.dispatch('auth/getTest'))
    }
  }
}
</script>

<style scoped>

</style>