import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.view.vue'
import Activity from '../views/Activity.view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/activity/:id',
      name: 'activity',
      component: Activity,
    }
  ]
})

export default router
