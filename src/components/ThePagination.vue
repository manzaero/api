<template>
  <div class="card">
      <div v-for="p in totalPages" :key="p">
        <button
            class="btn"
            :class="{active: currentPage === p}"
            @click="changePage(p)"

        >{{p}}</button>
      </div>
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
.active {
  background-color: #66A5AD;
}

</style>