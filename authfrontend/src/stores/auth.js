import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  const getUser = async () => {
    try {
      const { data } = await axios.get('/api/user');
      user.value = data
    } catch (error) {
      console.log(error);      
    }
  }

  return { user, getUser }
})