<template>
  <div class="revenue-analysis">
    <h1>Revenue Analysis</h1>
    
    <RevenueSummary />
    
    <div class="filters">
      <RevenueCategoryFilter />
      <div class="period-toggle">
        <button 
          v-for="period in ['daily', 'weekly', 'monthly']" 
          :key="period"
          @click="store.selectedPeriod = period"
          :class="{ active: store.selectedPeriod === period }"
        >
          {{ period.charAt(0).toUpperCase() + period.slice(1) }}
        </button>
      </div>
    </div>
    
    <RevenueTrendChart />
  </div>
</template>

<script setup>
import { useRevenueStore } from '../stores/useRevenueStore'
import RevenueSummary from '../components/RevenueAnalysis/RevenueSummary.vue'
import RevenueTrendChart from '../components/RevenueAnalysis/RevenueTrendChart.vue'
import RevenueCategoryFilter from '../components/RevenueAnalysis/RevenueCategoryFilter.vue'

const store = useRevenueStore()
</script>

<style scoped>
.revenue-analysis {
  padding: 20px;
}

.filters {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.period-toggle button {
  padding: 8px 16px;
  margin-left: 10px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.period-toggle button.active {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
}
</style>