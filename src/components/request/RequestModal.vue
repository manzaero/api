<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: nError}">
      <label for="name">Имя</label>
      <input type="text" id="name" v-model="Name" @blur="nBlur">
      <small v-if="nError">{{nError}}</small>
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