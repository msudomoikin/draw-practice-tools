<template>
    <div class="flex h-screen w-screen">
      <Sidebar></Sidebar>
      <!-- Content -->
      <div class="flex-1 flex flex-col">
        <!-- Topbar -->
        <!-- <Topbar></Topbar> -->
        <!-- Main content -->
        <div class="flex-1 items-start p-4 overflow-auto">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Sidebar from './components/Sidebar.vue';
import Topbar from './components/Topbar.vue';


  export default {
    name: "DefaultLayout",
    components: { Sidebar, Topbar }
}
  </script>
  
  <style scoped>
  /* Здесь может быть ваш CSS */
  </style>
  