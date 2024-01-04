<template>
  <v-container>
    <h1 class="text-h2 mb-4">Поиск рисунка в пятнах</h1>

    <v-alert
      icon="mdi-information-outline"
      text="Найдите рисунок, сюжеты, персонажей в этой случайной линии. Это упражнение поможет вам улучшить свои навыки восприятия и увидеть рисунок в обычных объектах."
      type="info"
      variant="tonal"
      class="mb-10"
    ></v-alert>
    <v-sheet class="bg-grey-lighten-4">
      <svg ref="svg" :width="width" :height="height" class="mb-4 mx-auto d-block">
        <defs>
          <filter id="spot">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="5"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="50"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
        <circle
          v-for="spot in spots"
          :key="spot.id"
          :cx="spot.x"
          :cy="spot.y"
          :r="spot.radius"
          fill="rgba(0, 0, 0, 0.2)"
          filter="url(#spot)"
        />
      </svg>
    </v-sheet>
    <v-btn
      class="bg-purple-darken-3 p-3 mr-3"
      icon="mdi-reload"
      @click="generateSpots()"
    >
    </v-btn>
    <v-btn
      class="bg-purple-darken-3 p-3"
      icon="mdi-content-save"
      @click="downloadSVG()"
    >
    </v-btn>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const width = 500;
const height = 500;
const spots = ref([]);
const svg = ref(null);

function generateSpots() {
  spots.value = Array.from({ length: 10 }, (_, id) => ({
    id,
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 100, // увеличен максимальный радиус
  }));
}

function downloadSVG() {
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svg.value);
  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = "spots.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

onMounted(generateSpots);
</script>

<style scoped></style>
