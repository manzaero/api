<template>
  <h4 v-if="!categories || categories.length === 0" class="text-center">Пустой список</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Название</th>
      <th>Имя</th>
      <th>Фамилия</th>
      <th>Почта</th>
      <th>Телефон</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(category, index) in categories" :key="category.id">
      <td>{{ index + 1 }}</td>
      <td>{{ category.Name }}</td>
      <td>{{ category.FirstName }}</td>
      <td>{{ category.LastName }}</td>
      <td>{{ category.Email }}</td>
      <td>{{ category.Phone }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'CategoryTable',
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('getCategory')
    })

    const categories = computed(() => store.getters.categories)

    return { categories }
  }
}
</script>
