<template>
    <div class="flex h-screen w-screen">
      <Sidebar></Sidebar>
      <!-- Content -->
      <div class="flex-1 flex flex-col">
        <!-- Topbar -->
        <Topbar></Topbar>
        <!-- Main content -->
        <div class="flex-1 p-4 overflow-auto">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Sidebar.vue';


  export default {
    name: "DefaultLayout",
    components: { Sidebar }
}
  </script>
  
  <style scoped>
  /* Здесь может быть ваш CSS */
  </style>
  