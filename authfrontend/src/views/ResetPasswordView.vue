<script setup>
import axios from 'axios';
import { ref } from 'vue';

  const form = ref({
    email: null
  })
  
  const requestPasswordResetLink = async () => {
    try {
      await axios.post('/forgot-password', form.value)
    } catch (error) {
      console.log(error);
    }
  }
</script>

<template>
  <form @submit.prevent="requestPasswordResetLink">
    <div>
      <label for="email">Email</label>
      <input
        v-model="form.email" 
        type="email" 
        class="border p-2 border-black">
    </div>
    <button type="submit" class="border border-black p-2">Send password reset link</button>
  </form>
</template>