<template>
  <div class="card">
    <div class="title">
      {{title}}
    </div>
    <hr>
    <div v-if="lists" class="card" v-for="list in lists">
      <p>Name: {{list.Name}}</p>
    </div>
    <button v-else class="btn primary" @click="getList">Загрузить</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  props:{
    title:{
      type: String,
      require: true
    }
  },
  computed: mapGetters({lists: 'api/getList'}),
  methods: mapActions({getList: 'api/getListApi'}),
  name: "AppList"
}
</script>

<style scoped>

</style>