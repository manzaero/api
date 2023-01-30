<template>
  <app-page title="Список">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать" @close="modal = false">
        <request-modal/>
      </app-modal>
    </teleport>
  </app-page>

  <app-category category="Category">

  </app-category>

</template>

<script>
import {ref} from 'vue'
import AppCategory from "@/components/ui/AppCategory";
import AppPage from "@/components/ui/AppPage";
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
  components:{AppPage, AppCategory, RequestTable, AppModal, RequestModal}
}
</script>
