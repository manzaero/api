<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <slot name="header"/>
    </h2>

    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type: String,
      required: true
    }
  },
  setup(props){
    document.title = `${props.title} | Clone`
  }
}
</script>