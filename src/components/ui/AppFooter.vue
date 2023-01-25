<template>
	<div class="card">
		<div class="card-title">
			{{ test }}
		</div>
		<hr>
		<div class="card" v-for="user in users" :key="user">
				<ul>
					<li>Phone: {{ user.Phone }}</li>
					<li>Username: {{ user.FirstName }}</li>
					<li>E-mail: {{ user.Email }}</li>
					<li>Role: {{ user.Role }}</li>
				</ul>
		</div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  props:{
    test:{
      type: String,
      required: true
    }
  },
  computed: mapGetters({users: 'auth/users'}),
  methods: mapActions({getUsers: "auth/getUsers"}),
  async mounted(){
    await this.getUsers()
  },
  setup(){
  }
}
</script>

<style scoped>

</style>