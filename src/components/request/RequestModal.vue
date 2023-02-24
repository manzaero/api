<template>
  <form @submit.prevent="onSubmit">

    <div class="form-control" :class="{invalid: nError}">
      <label for="name">Наименование категории</label>
      <input type="text" id="name" v-model="Name" @blur="nBlur">
      <small v-if="nError">{{nError}}</small>
    </div>
    <div class="form-control" :class="{invalid: fError}">
      <label for="name">Имя</label>
      <input type="text" id="name" v-model="FirstName" @blur="fBlur">
      <small v-if="fError">{{fError}}</small>
    </div>
    <div class="form-control" :class="{invalid: lError}">
      <label for="name">Фамилия</label>
      <input type="text" id="name" v-model="LastName" @blur="lBlur">
      <small v-if="lError">{{lError}}</small>
    </div>
    <div class="form-control" :class="{invalid: eError}">
      <label for="name">Почта</label>
      <input type="text" id="name" v-model="Email" @blur="eBlur">
      <small v-if="eError">{{eError}}</small>
    </div>
    <div class="form-control" :class="{invalid: pError}">
      <label for="name">Телефон</label>
      <input type="text" id="name" v-model="Phone" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>


    <button class="btn danger" :disabled="isSubmitting">Добавить</button>
  </form>
</template>

<script>
import {useRequestForm} from "@/use/request-form";
import {useStore} from "vuex";
export default {
  emits:['created'],
  setup(_, {emit}){
    const store = useStore()
    const submit = async values => {
      await store.dispatch('request/create', values)
      emit('created')
    }

    return {
      ...useRequestForm(submit)
    }
  },
  name: "RequestModal"
}
</script>