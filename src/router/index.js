import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Error404 from "@/pages/Error404";
import Curso from "@/views/Curso";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Curso',
    name: 'Curso',
    component: Curso
  },

  { path: '/:pathMatch(.*)*', component: Error404}
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
