<script setup>
  import { ref } from 'vue';
  import { RouterLink, useRouter } from 'vue-router';
  import axios from 'axios'

  const router = useRouter();

  const form = ref({
    email: null,
    password: null
  })

  const login = async () => {
    try {
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/login', form.value)

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }
</script>

<template>
  <form @submit.prevent="login" class="p-5">
    <div>
      <label for="email">Email</label>
      <input 
        v-model="form.email"
        type="email" 
        name="email"
        class="border border-black block"
        required>
    </div>
    <div>
      <label for="password">password</label>
      <input 
        v-model="form.password"
        type="password" 
        name="password"
        class="border border-black block"
        required>
    </div>
    <div>
      <button type="submit" class="border border-black">Login</button>
      <router-link to="/register">Create account</router-link>
      <router-link to="/forgot-password">Forgot password</router-link>
    </div>
  </form>
</template>