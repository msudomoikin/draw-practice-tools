<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" permanent>
      <Sidebar></Sidebar>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Упражнения для рисования <v-icon icon="mdi-draw" /></v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import { ref } from "vue";
import { RouterView } from "vue-router";

const drawer = ref(true);
</script>
