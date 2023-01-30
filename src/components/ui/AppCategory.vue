<template>
  <div class="card">
    <div class="title">
      {{category}}
    </div>
    <hr>
  <div class="card" v-for="category in categories" :key="categories.id">
    <p>Name: {{category.Name}}</p>
    <p>Product has: {{category.HasProduct}}</p>
  </div>
    <button class="btn primary" @click="clickCat">+++</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props:{
    category:{
      type: String,
      require: true
    }
  },
  data(){
    return {
      categories: null,
      pages: 1
    }
  },
  methods:{
    async getCat(){
      await axios.get('https://test.octopus.uz/api/v1/category',{
        headers:{
          'Authorization': `bearer ` + JSON.parse(localStorage.getItem('jwt-token'))
        }
      })
          .then(res => {
            this.categories = res.data.data
          })
    }
  },
  computed:{
    clickCat(){
      this.categories = this.getCat()
      console.log(this.categories)
    }
  },
  async mounted(){

  },
  name: "AppCategory"
}
</script>

<style scoped>

</style>