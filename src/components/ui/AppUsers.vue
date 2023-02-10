<template>
	<div class="card">
		<div class="card-title">
			{{ title }}
		</div>
		<hr>
    <div v-if="users.length === 0" class="card">
      <h4>Не постаточно прав для просмотра списка пользователей</h4>
    </div>
		<div v-else class="card" v-for="user in users" :key="user.id">
				<ul>
					<li>Phone: {{ user.Phone }}</li>
					<li>Username: {{ user.FirstName }}</li>
					<li>E-mail: {{ user.Email }}</li>
					<li>Role: {{ user.Role }}</li>
				</ul>
      <button class="btn warning">delete</button>
		</div>
    <div v-if="users.length != 0" class="card flex-row">
      <button class="btn danger" @click="">prev</button>
      <button class="btn danger" @click="">next</button>
      <button class="btn danger" @click="clickLoad">delete</button>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import axios from "axios";

export default {
  props:{
    title:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      users: {},
      // page: 1,
      // total: 0
    }
  },
  computed:{
    clickLoad(){
      return this.loadUsers
    }
  },
  methods:{
    async loadUsers(){
      const res = await axios.get(`users`, {
        headers:{
          'Authorization': `bearer `+ JSON.parse(localStorage.getItem('jwt-token'))
        }
      })
      let data = res.data.data
      this.users = data
      let meta = res.data.meta.total
      console.log(res, meta)
    }
  }

  // async mounted(){
  //   await this.getUsers(this.page)
  // },
  // computed: mapGetters({users: "api/users"}),
  // methods: {
  //   ...mapActions({getUsers: 'api/getUsers'}),
  //   next(){
  //
  //   }
  // },
}
</script>