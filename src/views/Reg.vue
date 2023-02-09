<template>
  <form class="card" @submit.prevent="regSubmit">
    <h1>Регистрация для админки</h1>

    <div :class="['form-control', {invalid:fnError}]">
      <label for="FirstName">Имя</label>
      <input type="FirstName" id="FirstName" v-model="FirstName" @blur="fnBlur">
      <small v-if="fnError">{{fnError}}</small>
    </div>

    <div :class="['form-control', {invalid:lnError}]">
      <label for="LastName">Фамилия</label>
      <input type="LastName" id="LastName" v-model="LastName" @blur="lnBlur">
      <small v-if="lnError">{{lnError}}</small>
    </div>


    <div :class="['form-control', {invalid:eError}]">
      <label for="Email">Почта</label>
      <input type="Email" id="Email" v-model="Email" @blur="eBlur">
      <small v-if="eError">{{eError}}</small>
    </div>


    <div :class="['form-control', {invalid:phError}]">
      <label for="Phone">Телефон</label>
      <input type="Phone" id="Phone" v-model="Phone" @blur="phBlur">
      <small v-if="phError">{{phError}}</small>
    </div>

    <div :class="['form-control', {invalid: pError}]">
      <label for="Password">Пароль</label>
      <input type="Password" id="Password" v-model="Password" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>

    <div :class="['form-control', {invalid: pcError}]">
      <label for="Password_confirmation">Пароль повторим</label>
      <input type="password" id="Password_confirmation" v-model="Password_confirmation" @blur="pcBlur">
      <small v-if="pcError">{{pcError}}</small>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting || isToMany">Зарегестрироваться</button>
    <button class="btn" type="reset">Очистить форму</button>
    <div class="text-danger" v-if="isToMany">Не торопись!</div>
  </form>
</template>

<script>
import {useRegForm} from "@/use/reg-form";

export default {
  setup(){
    return {...useRegForm()}
  },
  name: "Auth"
}
</script>