<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="p-6 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Ваша случайная линия:</h2>
        <svg :width="width" :height="height" class="mb-4">
          <path :d="line" fill="none" stroke="black" />
        </svg>
        <button @click="generateLine" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Сгенерировать новую линию</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const width = 400;
      const height = 400;
      const line = ref('');
  
      function generateLine() {
        let path = `M ${Math.random() * width} ${Math.random() * height} `;
  
        for (let i = 0; i < 10; i++) {
          path += `C ${Math.random() * width} ${Math.random() * height} ${Math.random() * width} ${Math.random() * height} ${Math.random() * width} ${Math.random() * height} `;
        }
  
        line.value = path;
      }
  
      onMounted(generateLine);
  
      return { line, generateLine, width, height };
    },
  };
  </script>
  
  <style scoped>
  </style>
  