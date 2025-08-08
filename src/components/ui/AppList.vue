<template>
  <div class="card">
    <div class="title">
      {{ title }}
    </div>
    <hr>

    <table v-if="categories && categories.length" class="table">
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
      <tr v-for="(category, index) in categories" :key="category.id || index">
        <td>{{ index + 1 }}</td>
        <td>{{ category.Name }}</td>
        <td>{{ category.FirstName }}</td>
        <td>{{ category.LastName }}</td>
        <td>{{ category.Email }}</td>
        <td>{{ category.Phone }}</td>
      </tr>
      </tbody>
    </table>

    <button v-else class="btn primary" @click="getList">Загрузить</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories'
    })
  },
  methods: {
    ...mapActions({
      getList: 'getCategory'
    })
  },
  name: "AppList"
};
</script>
