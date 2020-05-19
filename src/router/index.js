import Vue from "vue";
import VueRouter from "vue-router";
import Eth from "../views/Eth.vue";
import Btc from "../views/Btc.vue";
import Link from "../views/Link.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "eth",
    component: Eth,
  },
  {
    path: "/eth",
    name: "eth",
    component: Eth,
  },
  {
    path: "/btc",
    name: "Btc",
    component: Btc,
  },
  {
    path: "/link",
    name: "Link",
    component: Link,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
