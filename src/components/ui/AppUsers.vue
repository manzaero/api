<template>
	<div class="card">
		<div class="card-title">
			{{ title }}
		</div>
		<hr>
    <div v-if="users.length === 0" class="card">
      <h4>Не постаточно прав для просмотра списка пользователей</h4>
    </div>
		<div v-else class="card" v-for="user in users" :key="user">
				<ul>
					<li>Phone: {{ user.Phone }}</li>
					<li>Username: {{ user.FirstName }}</li>
					<li>E-mail: {{ user.Email }}</li>
					<li>Role: {{ user.Role }}</li>
				</ul>
      <button class="btn warning">delete</button>
		</div>
    <div v-if="users.length != 0" class="card flex-row">
      <button class="btn danger">prev</button>
      <button class="btn danger" @click="">next</button>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  props:{
    title:{
      type: String,
      required: true
    }
  },
  computed: mapGetters({users: "api/users"}),
  methods: mapActions({getUsers: 'api/getUsers'}),
  data(){
    return {
      page: 1,
      total: 0
    }
  },
  async mounted(){
    await this.getUsers(this.page)
  },

}
</script>

<style scoped>
.flex-row {
  display: flex;
  justify-content: space-between;
}
</style>