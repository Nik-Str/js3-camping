import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CabinView from '../views/CabinView.vue';
import Activities from '../views/Activities.vue';
import EventView from '../views/EventView.vue';
import FoodView from '../views/FoodView.vue';
import RestaurantView from '../views/RestaurantView.vue';
import SpaView from '../views/SpaView.vue';
import BeachView from '../views/BeachView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,

  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities,
  },
  {
    path: '/beach',
    name: 'beach',
    component: BeachView,
  },
  {
    path: '/cabin',
    name: 'cabin',
    component: CabinView,
  },
  {
    path: '/event',
    name: 'event',
    component: EventView,
  },
  {
    path: '/food',
    name: 'food',
    component: FoodView,
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: RestaurantView,
  },
  {
    path: '/spa',
    name: 'spa',
    component: SpaView,
  },
{
  path: '/cabin',
  name: 'cabin',
  component: CabinView,
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
