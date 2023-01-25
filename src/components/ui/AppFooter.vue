<template>
	<div class="card">
		<div class="card-title">
			{{ test }}
		</div>
		<hr>
		<div class="card" v-for="user in getUsers" :key="user">
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

import {mapGetters} from 'vuex'

export default {
  props:{
    test:{
      type: String,
      required: true
    }
  },
  // computed: {
  //   users(){
  //     return this.$store.getters.users
  //   }
  // },
  computed: mapGetters({getUsers: 'auth/getUsers'}),
  setup(){
  }
}
</script>

<style scoped>

</style>