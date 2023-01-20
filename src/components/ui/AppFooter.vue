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
					<li>Role: {{ user.Role }}</li>
				</ul>
			</div>
		</div>
		<button class="btn danger" @click="getUsers">Load</button>
	</div>
</template>

<script>
import {getUsers} from "@/use/get-users";

export default {
  props:{
    test:{
      type: String,
      required: true
    }
  },
  setup(){
    return {...getUsers()}
  }
}
</script>

<style scoped>

</style>