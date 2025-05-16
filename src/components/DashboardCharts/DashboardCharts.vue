<script setup>
import { ref, computed } from 'vue'
import { BarChar, BarChart, LineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  timeRange: {
    type: String,
    default: 'monthly' 
  }
})


const generateChartData = (type) => {
  const labels = []
  const data = []
  
  const count = props.timeRange === 'daily' ? 30 : 
               props.timeRange === 'weekly' ? 12 : 12
               
  for (let i = 0; i < count; i++) {
    if (props.timeRange === 'daily') {
      labels.push(`Day ${i+1}`)
    } else if (props.timeRange === 'weekly') {
      labels.push(`Week ${i+1}`)
    } else {
      labels.push(new Date(2023, i, 1).toLocaleString('default', { month: 'short' }))
    }
    
    if (type === 'orders') {
      data.push(Math.floor(Math.random() * 100) + 50)
    } else if (type === 'sales') {
      data.push(Math.floor(Math.random() * 5000) + 2000)
    } else {
      data.push(Math.floor(Math.random() * 10000) + 5000)
    }
  }
  
  return { labels, data }
}
const ordersData = computed(() => ({
  labels: generateChartData('orders').labels,
  datasets: [
    {
      label: 'Orders',
      data: generateChartData('orders').data,
      backgroundColor: '#4CAF50',
      borderColor: '#388E3C',
      borderWidth: 2
    }
  ]
}))

const salesData = computed(() => ({
  labels: generateChartData('sales').labels,
  datasets: [
    {
      label: 'Sales ($)',
      data: generateChartData('sales').data,
      backgroundColor: 'rgba(33, 150, 243, 0.2)',
      borderColor: '#2196F3',
      borderWidth: 2,
      tension: 0.4
    }
  ]
}))

const revenueData = computed(() => ({
  labels: generateChartData('revenue').labels,
  datasets: [
    {
      label: 'Revenue ($)',
      data: generateChartData('revenue').data,
      backgroundColor: 'rgba(156, 39, 176, 0.2)',
      borderColor: '#9C27B0',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }
  ]
}))

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
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
      text: 'Monthly Revenue Trend',
      font: {
        size: 16
      }
    }
  }
})
</script>

<template>
  <div class="dashboard-charts">
    <div class="chart-row">
      <div class="chart-container">
        <h3>Total Orders</h3>
        <BarChart :chartData="ordersData" :options="chartOptions" />
      </div>
      ``
      <div class="chart-container">
        <h3>Total Sales</h3>
        <LineChart :chartData="salesData" :options="chartOptions" />
      </div>
    </div>
    
    <div class="chart-container full-width">
      <h3>Revenue Trend</h3>
      <Line :chartData="revenueData" :options="revenueOptions" />
    </div>
  </div>
</template>


<style scoped>
.dashboard-charts {
  padding: 20px;
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.chart-container.full-width {
  flex: 100%;
}

.chart-container h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .chart-row {
    flex-direction: column;
  }
}
</style>