<template>
  <div :class="['alert', 'danger']">
    <p class="alert-title">Title</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <span class="alert-close">&times;</span>
  </div>
</template>

<script>
import {useRouter} from "vue-router/dist/vue-router";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup(){
    const router = useRouter()
    const message = computed(() => store.message.message)
    return {
      message
    }
  }
}
</script>

<style scoped>

</style>