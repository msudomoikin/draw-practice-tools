<template>
  <v-container>
    <h1 class="text-h2 mb-4">Случайное слово</h1>

    <v-alert
      icon="mdi-information-outline"
      text="Это упражнение поможет вам развить свою фантазию и творческий подход к рисованию."
      type="info"
      variant="tonal"
      class="mb-10"
    ></v-alert>
    <v-skeleton-loader
      type="heading"
      class="mb-4"
      v-if="loading"
    ></v-skeleton-loader>
    <p class="text-h2 mb-4" v-if="!loading">{{ randomWord }}</p>
    <v-btn
      class="bg-purple-darken-3 p-3"
      icon="mdi-reload"
      @click="getRandomWord()"
    >
    </v-btn>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

let randomWord = ref("");
let loading = ref(true);

async function getRandomWord() {
  try {
    loading.value = true;
    const response = await axios.get("https://ru.wiktionary.org/w/api.php", {
      params: {
        action: "query",
        format: "json",
        list: "random",
        rnnamespace: 0,
        rnlimit: 1,
      },
    });

    if (response.data && response.data.query && response.data.query.random) {
      randomWord.value = response.data.query.random[0].title;
      loading.value = false;
    }
  } catch (error) {
    console.error("Ошибка при получении случайного слова:", error);
  }
}

onMounted(() => {
  getRandomWord();
});
</script>

<style scoped></style>
