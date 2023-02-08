<template>
  <div class="card">
    <div class="card-title">
      {{title}}
    </div>
    <div v-if="lists" class="card" v-for="list in lists" :key="id">
      <p>{{list.Name}}</p>
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
      required: true
    }
  },
  computed: mapGetters({lists: 'list/getList'}),
  methods: mapActions({getList: 'list/getListApi'}),
  name: "AppList"
}
</script>

<style scoped>

</style>