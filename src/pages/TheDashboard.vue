<script setup>
import { ref, computed } from 'vue'
import { demoData } from '../data/data'
import DashboardCharts from '@/components/DashboardCharts/DashboardCharts.vue'
import SummaryCard from '@/components/DashboardCharts/SummaryCard.vue'

const selectedRange = ref('monthly')

const totalOrders = computed(() => demoData.revenue.totalOrders || 0)
const totalSales = computed(() => demoData.revenue.totalSales || 0)
const totalRevenue = computed(() => {
  return demoData.revenue.byCategory.reduce((sum, cat) => sum + (cat.sales || 0), 0)
})
const ordersTrend = computed(() => {
  const monthly = demoData.revenue.monthlyTrends
  if (monthly.length < 2) return 0
  const current = monthly[monthly.length - 1].orders
  const previous = monthly[monthly.length - 2].orders
  return ((current - previous) / previous * 100).toFixed(1)
})

const salesTrend = computed(() => {
  const monthly = demoData.revenue.monthlyTrends
  if (monthly.length < 2) return 0
  const current = monthly[monthly.length - 1].sales
  const previous = monthly[monthly.length - 2].sales
  return ((current - previous) / previous * 100).toFixed(1)
})

const revenueTrend = computed(() => {
  const monthly = demoData.revenue.monthlyTrends
  if (monthly.length < 2) return 0
  const current = monthly[monthly.length - 1].sales
  const previous = monthly[monthly.length - 2].sales
  return ((current - previous) / previous * 100).toFixed(1)
})
const formatValue = (value) => {
  if (typeof value === 'number') return value.toLocaleString()
  return value || '0'
}

function changeTimeRange(range) {
  selectedRange.value = range
  if (selectedRange.value === range) {
    selectedRange.value = ''
    nextTick(() => selectedRange.value = range)
  }
}
</script>

<template>
  <div class="dashboard-home">
    <h1>Dashboard Overview</h1>

    <div class="time-range-selector">
      <button v-for="range in ['daily', 'weekly', 'monthly']" :key="range" @click="selectedRange = range"
        :class="{ active: selectedRange === range }">
        {{ range.charAt(0).toUpperCase() + range.slice(1) }}
      </button>
    </div>

    <div class="summary-cards">
      <SummaryCard title="Total Orders" :value="formatValue(totalOrders)" color="green" />
      <SummaryCard title="Total Sales" :value="'$' + formatValue(totalSales)" color="blue" />
      <SummaryCard title="Total Revenue" :value="'$' + formatValue(totalRevenue)" color="purple" />
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
  margin: 30px 0;
}

@media (max-width: 768px) {
  .summary-cards {
    flex-direction: column;
  }
}
</style>