<template>
  <v-container>
    <h1 class="text-h2 mb-4"></h1>
    <p class="text-h3 mb-4">{{ adjective }} {{ noun }}</p>
    <v-btn
      class="bg-purple-darken-3 p-3"
      icon="mdi-reload"
      @click="generateWords()"
    >
    </v-btn>
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const adjectives = [
      "красивый",
      "быстрый",
      "тяжелый",
      "маленький",
      "большой",
    ];
    const nouns = ["яблоко", "дом", "автомобиль", "собака", "книга"];
    const adjective = ref(
      adjectives[Math.floor(Math.random() * adjectives.length)]
    );
    const noun = ref(nouns[Math.floor(Math.random() * nouns.length)]);

    function generateWords() {
      adjective.value =
        adjectives[Math.floor(Math.random() * adjectives.length)];
      noun.value = nouns[Math.floor(Math.random() * nouns.length)];
    }

    onMounted(generateWords);

    return { adjective, noun, generateWords };
  },
};
</script>
