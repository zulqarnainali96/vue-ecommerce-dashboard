import { defineStore } from 'pinia'
import { demoData } from '../data/demoData'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const formData = ref({
    name: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    minStock: 0,
    image: null,
  })

  const categories = ref([...demoData.inventory.categories])
  const isSubmitted = ref(false)

  function resetForm() {
    formData.value = {
      name: '',
      description: '',
      category: '',
      price: 0,
      stock: 0,
      minStock: 0,
      image: null,
    }
  }

  function submitForm() {
    // In a real app, this would be an API call
    const inventoryStore = useInventoryStore()
    const newProduct = {
      id: Math.max(...inventoryStore.products.map((p) => p.id)) + 1,
      ...formData.value,
    }
    inventoryStore.products.push(newProduct)
    isSubmitted.value = true
    resetForm()
  }

  return {
    formData,
    categories,
    isSubmitted,
    submitForm,
    resetForm,
  }
})
