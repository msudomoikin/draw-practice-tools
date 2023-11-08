<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4">Ваше случайное слово:</h2>
      <p class="text-xl mb-4">{{ word }}</p>
      <button @click="generateWord" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Сгенерировать новое слово</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const words = ['яблоко', 'банан', 'вишня', 'дыня', 'ежевика', 'желудь', 'земляника', 'ирис', 'йогурт', 'клубника'];
    const word = ref(words[Math.floor(Math.random() * words.length)]);

    function generateWord() {
      word.value = words[Math.floor(Math.random() * words.length)];
    }

    return { word, generateWord };
  },
};
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
</style>
