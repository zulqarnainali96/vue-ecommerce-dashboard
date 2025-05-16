<script setup>
import { ref, computed } from 'vue'
import DashboardCharts from '@/components/DashboardCharts/DashboardCharts.vue'
import SummaryCard from '@/components/DashboardCharts/SummaryCard.vue'

const selectedRange = ref('monthly')

// Sample data - replace with your actual data
const totalOrders = computed(() => 1245)
const totalSales = computed(() => 58420.75)
const totalRevenue = computed(() => 89250.30)
</script>


<template>
  <div class="dashboard-home">
    <h1>Dashboard Overview</h1>
    
    <div class="time-range-selector">
      <button 
        v-for="range in ['daily', 'weekly', 'monthly']" 
        :key="range"
        @click="selectedRange = range"
        :class="{ active: selectedRange === range }"
      >
        {{ range.charAt(0).toUpperCase() + range.slice(1) }}
      </button>
    </div>
    
    <DashboardCharts :timeRange="selectedRange" />
    
    <div class="summary-cards">
      <SummaryCard 
        title="Total Orders" 
        :value="totalOrders" 
        icon="shopping_cart" 
        color="green" 
      />
      <SummaryCard 
        title="Total Sales" 
        :value="totalSales" 
        icon="attach_money" 
        color="blue" 
      />
      <SummaryCard 
        title="Total Revenue" 
        :value="totalRevenue" 
        icon="trending_up" 
        color="purple" 
      />
    </div>
  </div>
</template>


<style scoped>
.dashboard-home {
  padding: 20px;
}

.time-range-selector {
  margin: 20px 0;
  display: flex;
  gap: 10px;
}

.time-range-selector button {
  padding: 8px 16px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.time-range-selector button.active {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.summary-cards {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

@media (max-width: 768px) {
  .summary-cards {
    flex-direction: column;
  }
}
</style>