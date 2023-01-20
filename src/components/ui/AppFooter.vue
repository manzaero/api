<template>
	<div class="card">
		<div class="card-title">
			{{ test }}
		</div>
		<hr>
		<div v-if="users.length != 0" class="card" v-for="user in users" :key="user.id">
			<div class="card">
				<ul>
					<li>Name: {{ user.Phone }}</li>
					<li>Username: {{ user.FirstName }}</li>
					<li>E-mail: {{ user.Email }}</li>
					<li>Role: {{ user.Role }}</li>
				</ul>
			</div>
		</div>
    <div v-else class="card">
      <h4>Данные отсутствуют так как список пользователей доступен лишь для администратора</h4>
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