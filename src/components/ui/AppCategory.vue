<template>
  <div class="card">
    <div class="title">
      {{category}}
    </div>
    <hr>
  <div v-if="categories" class="card" v-for="category in categories" :key="categories.id">
    <p>Name: {{category.Name}}</p>
    <p>Product has: {{category.HasProduct}}</p>
  </div>
    <button v-else class="btn primary" @click="getCategory">Загрузить</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  props:{
    category:{
      type: String,
      require: true
    }
  },
  computed: mapGetters({categories:'categories'}),
  methods: mapActions({getCategory: 'getCategory'}),
  name: "AppCategory"
}
</script>