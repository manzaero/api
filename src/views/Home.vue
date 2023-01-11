<template>
  <app-page title="Список">
    <template #header>
      <button class="btn primary">Создать</button>
    </template>
  </app-page>

  <app-footer info="test">


  </app-footer>
</template>

<script>
import AppPage from "@/components/ui/AppPage";
import AppFooter from "@/components/ui/AppFooter";
export default {
  name: 'Home',
  components:{AppPage, AppFooter}
}
</script>
