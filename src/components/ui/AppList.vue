<template>
  <div class="card">
    <div class="card-title">
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String,
      required: true
    }
  },
  name: "AppList"
}
</script>

<style scoped>

</style>