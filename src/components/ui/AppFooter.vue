<template>
	<div class="card">
		<div class="card-title">
			{{ test }}
		</div>
		<hr>
    <button class="btn warning" @click="getUsers">Load</button>
		<div class="card" v-for="user in users" :key="user.id">
			<div class="card">
				<ul>
					<li>Name: {{ user.Phone }}</li>
					<li>Username: {{ user.FirstName }}</li>
					<li>E-mail: {{ user.Email }}</li>
					<li>Role: {{ user.Role }}</li>
				</ul>
        <button class="btn warning" @click="getUsers">Load</button>
			</div>
		</div>
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