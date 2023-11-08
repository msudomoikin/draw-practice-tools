import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import RandomWord from "../components/RandomWord.vue";
import RandomLine from "../components/RandomLine.vue";
import RandomSpots from "../components/RandomSpots.vue";
import RandomProp from "../components/RandomProp.vue";




const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/random-word", name: "RandomWord", component: RandomWord },
  { path: "/random-line", name: "RandomLine", component: RandomLine },
  { path: "/random-spots", name: "RandomSpots", component: RandomSpots },
  { path: "/random-prop", name: "RandomProp", component: RandomProp },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;