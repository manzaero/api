<template>
	<div class="card">
		<div class="card-title">
			{{ title }}
		</div>
		<hr>
    <div v-if="users.length === 0" class="card">
      <h4>Не достаточно прав для просмотра списка пользователей</h4>
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
    <Paginate
        v-if="users.length"
        class="pagination"
        :page-count="total"
        :click-handler="loadUsers"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'waves-effect'">
    </Paginate>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  props:{
    title:{
      type: String,
      required: true
    }
  },
  computed:{
    ...mapGetters({
      users: 'users',
      total: 'total'})
  },
  methods:{...mapActions({loadUsers: "getUsers"})},
  mounted(){
    this.loadUsers(this.page)
  },
}
</script>
