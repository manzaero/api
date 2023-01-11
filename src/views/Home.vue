<template>
  <app-page title="Список">
    <template #header>
      <button class="btn primary">Создать</button>
    </template>
    <request-table :requests="[]"></request-table>
  </app-page>

  <app-footer info="test">


  </app-footer>
</template>

<script>
import AppPage from "@/components/ui/AppPage";
import AppFooter from "@/components/ui/AppFooter";
import RequestTable from "@/components/request/RequestTable";
export default {
  name: 'Home',
  components:{AppPage, AppFooter, RequestTable}
}
</script>
