<script setup>
  import { useAuthStore } from '../stores/auth';

  const authStore = useAuthStore();

</script>

<template>
  <main>
    {{ authStore.user }}
    
  </main>
</template>
