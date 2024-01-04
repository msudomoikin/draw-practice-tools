<template>
  <v-container class="w-100 h-screen container">
    
    <div class="sketchfab-embed-wrapper">
      <iframe
        ref="iframe"
        class="responsive-iframe"
        title="Skull Proportions"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/5ba99282d218446e856acf36e056d3e6/embed?dnt=1"
      >
      </iframe>
    </div>

    <v-btn
      class="bg-purple-darken-3 p-3"
      icon="mdi-content-save"
      @click="downloadBase64File()"
    >
    </v-btn>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";

onMounted(() => console.log(iframe))

let iframe = ref();

function downloadBase64File(data) {
  const downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);

  downloadLink.href = data;
  downloadLink.target = "_self";
  downloadLink.download = 'skull.png';
  downloadLink.click();
}
</script>
<style>
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
