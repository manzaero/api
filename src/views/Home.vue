<template>
  <app-page title="Список">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-table :requests="[]"></request-table>

<!--    <teleport to="body">-->
<!--      <app-modal v-if="modal" title="Создать" @close="modal = false">-->
<!--        <request-modal/>-->
<!--      </app-modal>-->
<!--    </teleport>-->
  </app-page>

  <app-footer test="Users">


  </app-footer>

</template>

<script>
import {ref} from 'vue'
import AppPage from "@/components/ui/AppPage";
import AppFooter from "@/components/ui/AppFooter";
import RequestTable from "@/components/request/RequestTable";
import AppModal from "@/components/ui/AppModal";
import RequestModal from "@/components/request/RequestModal";
export default {
  setup(){
    const modal = ref(false)

    return {
      modal
    }
  },
  components:{AppPage, AppFooter, RequestTable, AppModal, RequestModal}
}
</script>
