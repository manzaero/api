<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Вход в админку</h1>
    <div :class="['form-control', {invalid:phError}]">
      <label for="phone">Телефон</label>
      <input type="phone" id="phone" v-model="Phone" @blur="phBlur">
      <small v-if="phError">{{phError}}</small>
    </div>

    <div :class="['form-control', {invalid: pError}]">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="Password" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting || isToManyInter">Войти</button>
    <router-link to="/reg">
      <button class="btn">Регистрация</button>
    </router-link>
    <span class="text-danger" v-if="isToManyInter">Не так часто!</span>
  </form>
</template>

<script>
import {useLoginForm} from "@/use/login-form";
import {useRoute} from "vue-router/dist/vue-router";
import {error} from "@/utils/error";
import {useStore} from "vuex";

export default {
  setup(){
    const route = useRoute()
    const store = useStore()
    if (route.query.message){
      store.dispatch('setMessage',{
        value: error(route.query.message),
        type: 'warning'
      })
    }
    return {...useLoginForm()}
  },
  name: "Auth"
}
</script>

<style scoped>

</style>