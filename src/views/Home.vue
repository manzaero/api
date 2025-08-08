<template>
  <app-page title="Список">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать" @close="modal = false">
        <request-modal @created="onCreated" />
      </app-modal>
    </teleport>
  </app-page>

  <app-category category="Основная информация" />
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import AppCategory from "@/components/ui/AppCategory";
import AppPage from "@/components/ui/AppPage";
import RequestTable from "@/components/request/RequestTable";
import AppModal from "@/components/ui/AppModal";
import RequestModal from "@/components/request/RequestModal";

export default {
  setup() {
    const modal = ref(false)
    const store = useStore()

    const onCreated = () => {
      modal.value = false
      store.dispatch('getCategory')
    }

    return {
      modal,
      onCreated
    }
  },
  components: {
    AppPage,
    AppCategory,
    RequestTable,
    AppModal,
    RequestModal
  }
}
</script>
