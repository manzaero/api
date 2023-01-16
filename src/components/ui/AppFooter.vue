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
	props: {
		test: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			users: []
		}
	},
	methods: {
		async getUsers() {
			try {
				const users = await axios.get('https://jsonplaceholder.typicode.com/users');
				this.users = users
			} catch (e) {

			}
		}
	}
}
</script>

<style scoped>

</style>