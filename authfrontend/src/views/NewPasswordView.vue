<script setup>
  import axios from 'axios';
import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute()
  const router = useRouter();

  const form = ref({
    token: null,
    email: null,
    password: null,
    password_confirmation: null
  })

  onMounted(() => {
    form.value.token = route.params.token;
    form.value.email = route.query.email;
  })

  const resetPassword = async () => {
    try {
      await axios.post('/reset-password', form.value)

      router.push('/login')
    } catch (error) {
      console.log(error);
    }
  }

</script>

<template>
  <form @submit.prevent="resetPassword">
    <div>
      <label for="new-password">New password</label>
      <input 
        v-model="form.password"
        type="password" 
        name="new-password"
        class="border border-black p-2 block"
        required>
    </div>
    <div>
      <label for="confirm-password">confirm password</label>
      <input 
        v-model="form.password_confirmation"
        type="password" 
        name="confirm-password"
        class="border border-black p-2 block"
        required>
    </div>
    <div>
      <button type="submit" class="border border-black p-2">Reset password</button>
    </div>
  </form>
</template>