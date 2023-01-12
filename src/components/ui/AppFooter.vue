<template>
  <div class="card">
    <div class="card-title">
      {{test}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    test:{
      type: String,
      required: true
    }
  },
  setup(props){
    document.test = `${props.test}`
  }
}
</script>

<style scoped>

</style>