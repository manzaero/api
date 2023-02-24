<template>
  <nav class="navbar">
    <h3>Управление</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Категории</router-link>
      </li>
      <li>
        <router-link to="/add">Добавить</router-link>
      </li>
      <li>
        <router-link to="/users">Пользователи</router-link>
      </li>
      <li>
        <router-link to="/list">Лист</router-link>
      </li>
      <li>
        <a href="" @click.prevent="logout">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useRouter} from "vue-router/dist/vue-router";
import {useStore} from "vuex";

export default {
  setup(){
    const router = useRouter()
    const store = useStore()

    return {
      logout: () => {
        store.commit('logout')
        router.push('/auth')
        console.log('Вышел')
      }
    }
  }
}
</script>