<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { computed, onMounted } from 'vue';
import axios from 'axios';

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  authStore.getUser()
})

const user = computed(() => {
  return authStore.user;
})

const logout = async () => {
  try {
    await axios.post('/logout')
    authStore.user = null;
    router.push('/login')
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <nav class="bg-gray-800 text-gray-300 py-3 px-[15%] flex justify-between">
    <ul class="flex gap-4" v-if="user !== null">
      <li>
        <router-link active-class="text-red-400" to="/">Home</router-link>
      </li>
      <li>
        <router-link active-class="text-red-400" to="/about">About</router-link>
      </li>
    </ul>
    <ul v-if="user === null">
      <li>
        <router-link active-class="text-red-400" to="/login">Login</router-link>
      </li>
      <li>
        <router-link active-class="text-red-400" to="/register">Register</router-link>
      </li>
    </ul>
    <ul v-else>
      <li>
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

