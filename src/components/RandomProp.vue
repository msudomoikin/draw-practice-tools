<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="p-6 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Ваше случайное прилагательное и существительное:</h2>
        <p class="text-xl mb-4">{{ adjective }} {{ noun }}</p>
        <button @click="generateWords" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Сгенерировать новые слова</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const adjectives = ['красивый', 'быстрый', 'тяжелый', 'маленький', 'большой'];
      const nouns = ['яблоко', 'дом', 'автомобиль', 'собака', 'книга'];
      const adjective = ref(adjectives[Math.floor(Math.random() * adjectives.length)]);
      const noun = ref(nouns[Math.floor(Math.random() * nouns.length)]);
  
      function generateWords() {
        adjective.value = adjectives[Math.floor(Math.random() * adjectives.length)];
        noun.value = nouns[Math.floor(Math.random() * nouns.length)];
      }
  
      onMounted(generateWords);
  
      return { adjective, noun, generateWords };
    },
  };
  </script>
