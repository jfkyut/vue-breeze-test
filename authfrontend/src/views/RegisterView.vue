<script setup>
  import { RouterLink, useRouter } from 'vue-router';
  import axios from 'axios';
  import { ref } from 'vue';

  const router = useRouter();

  const form = ref({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
  })

  const register = async () => {
    try {
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/register', form.value)
      await axios.post('/email/verification-notification');

      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }
</script>

<template>
  <form @submit.prevent="register" class="p-5">
    <div>
      <label for="name">Name</label>
      <input 
        v-model="form.name"
        type="text" 
        name="name"
        class="border border-black block"
        required>
    </div>
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
      <label for="password-confirmation">password-confirmation</label>
      <input 
        v-model="form.password_confirmation"
        type="password" 
        name="password-confirmation"
        class="border border-black block"
        required>
    </div>
    <div>
      <button type="submit" class="border border-black">Register</button>
      <router-link to="/login">Login</router-link>
    </div>
  </form>
</template>