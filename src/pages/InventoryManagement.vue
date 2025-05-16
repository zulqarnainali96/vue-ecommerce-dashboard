<template>
  <div class="inventory-management">
    <h1>Inventory Management</h1>
    
    <InventoryFilter />
    
    <InventoryList />
    
    <InventoryUpdateModal v-if="showModal" @close="showModal = false" :product="selectedProduct" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InventoryList from '../components/InventoryManagement/InventoryList.vue'
import InventoryFilter from '../components/InventoryManagement/InventoryFilter.vue'
import InventoryUpdateModal from '../components/InventoryManagement/InventoryUpdateModal.vue'

const showModal = ref(false)
const selectedProduct = ref(null)

function openModal(product) {
  selectedProduct.value = product
  showModal.value = true
}

defineExpose({ openModal })
</script>

<style scoped>
.inventory-management {
  padding: 20px;
}
</style>