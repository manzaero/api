<template>
	<div class="card">
		<div class="card-title">
			{{ test }}
		</div>
		<hr>
		<div class="card" v-for="user in users" :key="user.id">
			<div class="card">
				<ul>
					<li>Name: {{ user.name }}</li>
					<li>Username: {{ user.username }}</li>
					<li>E-mail: {{ user.email }}</li>
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
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0Lm9jdG9wdXMudXpcL2FwaVwvdjFcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjczOTU3MzQzLCJleHAiOjE2NzM5NjA5NDMsIm5iZiI6MTY3Mzk1NzM0MywianRpIjoiUFpUZ2xoMGZqVE1halVQNCIsInN1YiI6MzQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.cU9EGx9yOtiZ0Qa9D6jFRvGOU9Xbp-GSvyCsYocnBk4`
        }
      })
      console.log(users)
    }
  }
}
</script>

<style scoped>

</style>