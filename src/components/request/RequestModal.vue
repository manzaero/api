<template>
  <form>
    <div class="form-control">
      <label for="name">Ф И О</label>
      <input type="text" id="name">
    </div>

    <div class="form-control">
      <label for="phone">Телефон</label>
      <input type="text" id="phone">
    </div>

    <div class="form-control">
      <label for="amount">Сумма</label>
      <input type="number" id="amount">
    </div>

    <div class="form-control">
      <label for="status">Статус</label>
      <select name="status" id="status">
        <option value="active">Активный</option>
        <option value="ending">Закончен</option>
        <option value="pending">В ожидании</option>
      </select>
    </div>
    <button class="btn danger" @submit.prevent>Добавить</button>
  </form>
</template>

<script>
export default {
  name: "RequestModal"
}
</script>

<style scoped>

</style>