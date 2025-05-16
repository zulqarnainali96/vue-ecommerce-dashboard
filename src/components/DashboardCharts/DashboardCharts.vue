<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { BarChart, LineChart } from 'vue-chart-3'
import { Chart } from 'chart.js'
import { demoData } from '../../data/data'

import {
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

onMounted(() => {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    BarController,
    LineController,
    Title,
    Tooltip,
    Legend,
    Filler
  )
  chartReady.value = true
})

const chartReady = ref(false)
const currentData = ref([])

const props = defineProps({
  timeRange: {
    type: String,
    required: true,
    validator: value => ['daily', 'weekly', 'monthly'].includes(value)
  }
})

watch(() => props.timeRange, (newRange) => {
  updateChartData(newRange)
}, { immediate: true })

function updateChartData(range) {
  switch(range) {
    case 'daily':
      currentData.value = demoData.revenue.dailyTrends
      break
    case 'weekly':
      currentData.value = demoData.revenue.weeklyTrends
      break
    case 'monthly':
      currentData.value = demoData.revenue.monthlyTrends
      break
    default:
      currentData.value = demoData.revenue.monthlyTrends
  }
}

// Generate dynamic labels based on time range
const getLabels = () => {
  if (!currentData.value.length) return []
  
  return currentData.value.map(item => {
    switch(props.timeRange) {
      case 'daily': return item.date
      case 'weekly': return item.week
      case 'monthly': return item.month
      default: return ''
    }
  })
}

const ordersData = computed(() => ({
  labels: getLabels(),
  datasets: [{
    label: 'Orders',
    data: currentData.value.map(item => item.orders),
    backgroundColor: '#4CAF50',
    borderColor: '#388E3C',
    borderWidth: 2
  }]
}))

const salesData = computed(() => ({
  labels: getLabels(),
  datasets: [{
    label: 'Sales ($)',
    data: currentData.value.map(item => item.sales),
    backgroundColor: 'rgba(33, 150, 243, 0.2)',
    borderColor: '#2196F3',
    borderWidth: 2,
    tension: 0.4
  }]
}))

const revenueData = computed(() => ({
  labels: demoData.revenue.byCategory.map(item => item.category),
  datasets: [{
    label: 'Revenue by Category ($)',
    data: demoData.revenue.byCategory.map(item => item.sales),
    backgroundColor: [
      'rgba(76, 175, 80, 0.6)',
      'rgba(33, 150, 243, 0.6)',
      'rgba(255, 152, 0, 0.6)',
      'rgba(156, 39, 176, 0.6)'
    ],
    borderColor: [
      '#4CAF50',
      '#2196F3',
      '#FF9800',
      '#9C27B0'
    ],
    borderWidth: 1
  }]
}))

// Chart options
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || ''
          if (label) label += ': '
          if (context.parsed.y !== null) {
            label += context.parsed.y.toLocaleString()
          }
          return label
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => value.toLocaleString()
      }
    }
  }
})

const revenueOptions = ref({
  ...chartOptions.value,
  plugins: {
    ...chartOptions.value.plugins,
    title: {
      display: true,
      text: 'Revenue by Category',
      font: { size: 16 }
    },
    legend: {
      display: true,
      position: 'right'
    }
  }
})
</script>

<template>
  <div class="dashboard-charts">
    <div v-if="!chartReady" class="loading">
      Loading charts...
    </div>
    
    <template v-else>
      <div class="chart-row">
        <div class="chart-container">
          <h3>Total Orders</h3>
          <div class="chart-wrapper">
            <BarChart :chartData="ordersData" :options="chartOptions" />
          </div>
        </div>
        
        <div class="chart-container">
          <h3>Total Sales</h3>
          <div class="chart-wrapper">
            <LineChart :chartData="salesData" :options="chartOptions" />
          </div>
        </div>
      </div>
      
      <div class="chart-container full-width">
        <h3>Revenue by Category</h3>
        <div class="chart-wrapper">
          <BarChart :chartData="revenueData" :options="revenueOptions" />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.dashboard-charts {
  padding: 20px;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #666;
}

.chart-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.chart-container {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.chart-container.full-width {
  flex: 100%;
}

.chart-container h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.2rem;
}

.chart-wrapper {
  position: relative;
  height: 300px;
  width: 100%;
}

@media (max-width: 768px) {
  .chart-row {
    flex-direction: column;
  }
  
  .chart-wrapper {
    height: 250px;
  }
}
</style>