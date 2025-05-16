import { defineStore } from 'pinia'
import { demoData } from '../data/data'
import { computed, ref } from 'vue'

export const useInventoryStore = defineStore('inventory', () => {
  const products = ref([...demoData.inventory.products])
  const searchQuery = ref('')
  const selectedCategory = ref('all')
  const sortBy = ref('name')
  const sortDirection = ref('asc')
  const showLowStockOnly = ref(false)

  const categories = computed(() => ['all', ...demoData.inventory.categories])

  const filteredProducts = computed(() => {
    let filtered = [...products.value]

    if (selectedCategory.value !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory.value)
    }

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query),
      )
    }

    if (showLowStockOnly.value) {
      filtered = filtered.filter((p) => p.stock < p.minStock)
    }

    filtered.sort((a, b) => {
      let comparison = 0
      if (sortBy.value === 'name') {
        comparison = a.name.localeCompare(b.name)
      } else if (sortBy.value === 'price') {
        comparison = a.price - b.price
      } else if (sortBy.value === 'stock') {
        comparison = a.stock - b.stock
      } else if (sortBy.value === 'category') {
        comparison = a.category.localeCompare(b.category)
      }

      return sortDirection.value === 'asc' ? comparison : -comparison
    })

    return filtered
  })

  function updateStock(productId, newStock) {
    const product = products.value.find((p) => p.id === productId)
    if (product) {
      product.stock = Math.max(0, newStock) // Ensure stock doesn't go negative
    }
  }

  return {
    products,
    filteredProducts,
    searchQuery,
    selectedCategory,
    sortBy,
    sortDirection,
    showLowStockOnly,
    categories,
    updateStock,
  }
})
