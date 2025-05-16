import { defineStore } from 'pinia'
import { demoData } from '../data/data'
import { computed, ref } from 'vue'

export const useRevenueStore = defineStore('revenue', () => {
  const selectedPeriod = ref('daily')
  const selectedCategory = ref('all')
  
  const revenueData = computed(() => demoData.revenue)
  
  const filteredData = computed(() => {
    if (selectedCategory.value === 'all') {
      return revenueData.value
    }
    return {
      ...revenueData.value,
      byCategory: revenueData.value.byCategory.filter(
        item => item.category === selectedCategory.value
      )
    }
  })
  
  const trendData = computed(() => {
    switch (selectedPeriod.value) {
      case 'daily': return revenueData.value.dailyTrends
      case 'weekly': return revenueData.value.weeklyTrends
      case 'monthly': return revenueData.value.monthlyTrends
      default: return revenueData.value.dailyTrends
    }
  })
  
  return {
    revenueData,
    filteredData,
    trendData,
    selectedPeriod,
    selectedCategory,
    categories: ['all', ...demoData.revenue.byCategory.map(item => item.category)]
  }
})