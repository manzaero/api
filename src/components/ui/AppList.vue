<template>
  <div class="card">
    <div class="title">
      {{title}}
    </div>
    <hr>
    <div v-if="lists" class="card" v-for="list in lists" :key="lists.id">
      <p>Name: {{list.Name}}</p>
      <p>Product has: {{list.HasProduct}}</p>
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
  computed: mapGetters({lists: 'data/lists'}),
  methods: mapActions({getList: 'data/getListApi'}),
  name: "AppList"
}
</script>