<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: nError}">
      <label for="name">Ф И О</label>
      <input type="text" id="name" v-model="name" @blur="nBlur">
      <small v-if="nError">{{nError}}</small>
    </div>

    <div class="form-control" :class="{invalid: pError}">
      <label for="phone">Телефон</label>
      <input type="text" id="phone" v-model="phone" @blur="pError">
      <small v-if="pError">{{pError}}</small>
    </div>

    <div class="form-control" :class="{invalid: aError}">
      <label for="amount">Сумма</label>
      <input type="number" id="amount" v-model.number="amount" @blur="aBlur">
      <small v-if="aError">{{aError}}</small>
    </div>

    <div class="form-control">
      <label for="status">Статус</label>
      <select name="status" id="status" v-model="status">
        <option value="active">Активный</option>
        <option value="cancelled">Отменён</option>
        <option value="pending">В ожидании</option>
        <option value="done">Завёршён</option>
      </select>
    </div>
    <button class="btn danger" :disabled="isSubmitting">Добавить</button>
  </form>
</template>

<script>
import {useRequestForm} from "@/use/request-form";
export default {
  emits:['created'],
  setup(_, {emit}){
    const submit = async values => {
      console.log(values)
      emit('created')
    }

    return {
      ...useRequestForm(submit)
    }
  },
  name: "RequestModal"
}
</script>