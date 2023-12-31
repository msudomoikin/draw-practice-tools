import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import router from "./router/index";


createApp(App).use(router).mount("#app");