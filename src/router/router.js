import TheInventory from '@/pages/TheInventory.vue'
import TheDashboard from '@/pages/TheDashboard.vue'
import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: TheDashboard,
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: TheInventory,
    },
  ],
})

export default router
