<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRevenueStore } from '../../stores/useRevenueStore'
import Chart from 'chart.js/auto'

const store = useRevenueStore()
const chartCanvas = ref(null)
let chartInstance = null

function renderChart() {
  if (chartInstance) {
    chartInstance.destroy()
  }
  
  const ctx = chartCanvas.value.getContext('2d')
  const labels = store.trendData.map(item => 
    store.selectedPeriod === 'monthly' ? item.month : 
    store.selectedPeriod === 'weekly' ? item.week : 
    item.date
  )
  
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Orders',
          data: store.trendData.map(item => item.orders),
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          tension: 0.3,
          yAxisID: 'y'
        },
        {
          label: 'Sales ($)',
          data: store.trendData.map(item => item.sales),
          borderColor: '#2196F3',
          backgroundColor: 'rgba(33, 150, 243, 0.1)',
          tension: 0.3,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Orders'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Sales ($)'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      }
    }
  })
}

onMounted(renderChart)
watch(() => [store.selectedPeriod, store.selectedCategory], renderChart)
</script>

<style scoped>
.chart-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: 20px;
}
</style>