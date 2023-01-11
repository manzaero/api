<template>
  <div class="card">
    <h3 class="card-title">{{info}}</h3>

    <slot/>
  </div>
</template>

<script>
export default {
  props:{
    info:{
      type: String,
      required: true
    }
  },
  setup(props){
    document.info = `${props.info} | Clone info`
  }
}
</script>

<style scoped>

</style>