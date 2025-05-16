import TheDashboard from '@/pages/TheDashboard.vue'
import { createWebHistory, createRouter } from 'vue-router'
import RevenueAnalysis from '@/pages/RevenueAnalysis.vue'
import InventoryManagement from '@/pages/InventoryManagement.vue'
import ProductRegistration from '@/pages/ProductRegistration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: TheDashboard,
    },
    {
      path: '/revenue',
      name: 'Revenue',
      component: RevenueAnalysis,
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: InventoryManagement,
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductRegistration,
    },
  ],
})

export default router
