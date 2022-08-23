import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/space',
    name: 'space',
    // route level code-splitting
    // this generates a separate chunk (space.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "space" */ '../pages/SpacePage.vue'),
    meta: {
      title: 'Space',
    },
  },
  {
    path: '/dinosaurs',
    name: 'dinosaurs',
    component: () => import(/* webpackChunkName: "dinosaurs" */ '../pages/DinosaursPage.vue'),
    meta: {
      title: 'Dinosaurs',
    },
  },
  {
    path: '/wildlife',
    name: 'wildlife',
    component: () => import(/* webpackChunkName: "wildlife" */ '../pages/WildlifePage.vue'),
    meta: {
      title: 'Wildlife',
    },
  },
  {
    path: '/oceans',
    name: 'oceans',
    component: () => import(/* webpackChunkName: "oceans" */ '../pages/OceansPage.vue'),
    meta: {
      title: 'Oceans',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.meta.title}`;
  next();
});

export default router;
