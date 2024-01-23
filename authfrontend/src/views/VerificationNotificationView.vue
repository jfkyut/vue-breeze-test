<script setup>
  import axios from 'axios';
import { ref } from 'vue';

  const message = ref(null);

  const sendEmailVerificationLink = async () => {
    try {
      await axios.post('/email/verification-notification')

      message.value = "Email verification link has been sent.";
    } catch (error) {
      message.value = error.response.data.message;
    }
  }  
</script>

<template>
  <div>
    <h1>Email verificaton notification</h1>
  </div>

  <span class="bg-green-200" v-if="message !== null">
    {{ message }}
  </span>

  <button class="border p-2" @click="sendEmailVerificationLink">Send email verification link</button>
</template>