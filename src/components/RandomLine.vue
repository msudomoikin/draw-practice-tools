<template>
  <v-container>
    <h1 class="text-h2 mb-4">Поиск рисунка в линиях</h1>
    <v-alert
      icon="mdi-information-outline"
      text="Постарайтесь найти образы в пересечениях линии. Это упражнение поможет вам улучшить свои навыки восприятия и воображения."
      type="info"
      variant="tonal"
      class="mb-10"
    ></v-alert>
    <v-sheet class="bg-grey-lighten-4">
      <svg :width="width" :height="height" class="mb-4 mx-auto d-block">
        <path :d="line" fill="none" stroke="black" />
      </svg>
    </v-sheet>
    <v-btn
      class="bg-purple-darken-3 p-3"
      icon="mdi-reload"
      @click="generateLine()"
    >
    </v-btn>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const width = 500;
const height = 599;
const line = ref("");

function generateLine() {
  let path = `M ${Math.random() * width} ${Math.random() * height} `;

  for (let i = 0; i < 10; i++) {
    path += `C ${Math.random() * width} ${Math.random() * height} ${
      Math.random() * width
    } ${Math.random() * height} ${Math.random() * width} ${
      Math.random() * height
    } `;
  }

  line.value = path;
}

onMounted(() => generateLine());
</script>

<style scoped></style>
