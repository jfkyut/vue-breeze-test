<script setup>
  import { useAuthStore } from '@/stores/auth';

  const authStore = useAuthStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ authStore.user }}
  </div>
</template>

