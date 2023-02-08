<template>
  <div class="card">
    <div class="title">
      {{title}}
    </div>
    <div v-if="lists" class="card" v-for="list in lists" :key="lists.id">
      <p>Name: {{list}}</p>
    </div>
    <hr>
    <button class="btn primary" @click="getList">Load</button>
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
  computed: mapGetters({lists: 'list/getList'}),
  methods: mapActions({getList: 'list/getListApi'}),
  name: "AppList"
}
</script>

<style scoped>

</style>