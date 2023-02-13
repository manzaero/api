<template>
	<div class="card">
		<div class="card-title">
			{{ title }}
		</div>
		<hr>
    <Paginate
        class="pagination"
        :page-count="3"
        :click-handler="loadUsers"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'">
    </Paginate>
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

  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},

  props:{
    title:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      users: [],
      page: 1,
      total: 0
    }
  },
  created(){
    this.loadUsers(this.page)
  },
  methods:{
    async loadUsers(numberPage){
      const res = await axios.get(`users?page=${numberPage}`, {
        headers:{
          'Authorization': `bearer `+ JSON.parse(localStorage.getItem('jwt-token'))
        }
      })
      let data = res.data.data
      this.users = data
      let meta = res.data.meta.total
      this.total = meta
      console.log(res, meta)
    }
  }
}
</script>

<style>

</style>