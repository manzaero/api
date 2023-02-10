<template>
  <div class="card">
    <ul>
      <li v-for="p in totalPages" :key="p">
        <button class="btn">{{p}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['total', 'pageCount'],
  data(){
    return {
      currentPage: 1
    }
  },
  computed:{
    totalPages(){
      return Math.ceil(this.total / this.pageCount)
    }
  },
  methods:{
    changePage(pageNumber){
      this.currentPage = pageNumber;
      this.$emit('page-changed', pageNumber)
    }
  },
  name: "ThePagination"
}
</script>

<style scoped>

</style>