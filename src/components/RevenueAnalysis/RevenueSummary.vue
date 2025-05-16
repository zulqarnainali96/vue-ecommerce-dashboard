<script setup>
import { useRevenueStore } from '../../stores/useRevenueStore'

const store = useRevenueStore()
</script>

<template>
  <div class="revenue-summary">
    <div class="summary-card">
      <h3>Total Orders</h3>
      <p class="value">{{ store.revenueData.totalOrders.toLocaleString() }}</p>
    </div>
    <div class="summary-card">
      <h3>Total Sales</h3>
      <p class="value">${{ store.revenueData.totalSales.toLocaleString() }}</p>
    </div>
    <div class="summary-card" v-if="store.selectedCategory !== 'all'">
      <h3>Category Orders</h3>
      <p class="value">
        {{ store.filteredData.byCategory[0]?.orders.toLocaleString() || 0 }}
      </p>
    </div>
    <div class="summary-card" v-if="store.selectedCategory !== 'all'">
      <h3>Category Sales</h3>
      <p class="value">
        ${{ store.filteredData.byCategory[0]?.sales.toLocaleString() || 0 }}
      </p>
    </div>
  </div>
</template>


<style scoped>
.revenue-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.summary-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.summary-card h3 {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 1rem;
}

.summary-card .value {
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}
</style>