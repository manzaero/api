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
          <li>Role: {{user.Role}}</li>
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
      users: null
    }
  },
  methods:{
    getUsers(){
      const params = {

      }
      const users = axios.get('https://test.octopus.uz/api/v1/users', {
        headers: {
          'Authorization': `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0Lm9jdG9wdXMudXpcL2FwaVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjczOTU5ODI0LCJleHAiOjE2NzM5NjM0MjQsIm5iZiI6MTY3Mzk1OTgyNCwianRpIjoiMEVrcUQ1djVUck5EVDNFNSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Ugj-u_UwaqURlWxmFUhD7d1JOmr-WruKD-5S4vTPWJU`
        }
      })
          .then((res) => {
            this.users = res.data.data
            console.log(res.data.data)
          })
    }
  }
}
</script>

<style scoped>

</style>