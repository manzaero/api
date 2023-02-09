<template>
  <h4 v-if="requests.length === 0" class="text-center">Пустой список</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Ф И О</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>СОстояние</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props:['requests']
}
</script>