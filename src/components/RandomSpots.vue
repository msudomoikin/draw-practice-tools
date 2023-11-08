<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4">Ваши случайные пятна:</h2>
      <svg ref="svg" :width="width" :height="height" class="mb-4">
        <defs>
          <filter id="spot">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
          </filter>
        </defs>
        <circle v-for="spot in spots" :key="spot.id" :cx="spot.x" :cy="spot.y" :r="spot.radius" fill="rgba(0, 0, 0, 0.2)" filter="url(#spot)" />
      </svg>
      <button @click="generateSpots" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Сгенерировать новые пятна</button>
      <button @click="downloadSVG" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Скачать картинку</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const width = 400;
    const height = 400;
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
      const url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "spots.svg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }

    onMounted(generateSpots);

    return { spots, generateSpots, width, height, svg, downloadSVG  };
  },
};
</script>

<style scoped>
</style>
