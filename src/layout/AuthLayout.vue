<template>
  <div class="container_auth">
    <div class="container_alert">
      <app-message/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import AppMessage from "@/components/ui/AppMessage";
export default {
  name: "AuthLayout",
  components:{AppMessage}
}
</script>

<style scoped>

</style>