<template>
  <div class="inventory-list">
    <div class="list-header">
      <p v-if="store.showLowStockOnly" class="low-stock-warning">
        Showing only low stock items ({{ store.filteredProducts.length }})
      </p>
      <p v-else>
        Showing {{ store.filteredProducts.length }} products
      </p>
    </div>
    
    <table>
      <thead>
        <tr>
          <th @click="setSort('name')">
            Product Name 
            <SortIndicator field="name" />
          </th>
          <th @click="setSort('category')">
            Category 
            <SortIndicator field="category" />
          </th>
          <th @click="setSort('price')">
            Price 
            <SortIndicator field="price" />
          </th>
          <th @click="setSort('stock')">
            Stock 
            <SortIndicator field="stock" />
          </th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <InventoryItem 
          v-for="product in store.filteredProducts" 
          :key="product.id" 
          :product="product"
          @update="openModal(product)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useInventoryStore } from '../../stores/useInventoryStore'
import InventoryItem from './InventoryItem.vue'
import SortIndicator from './SortIndicator.vue'

const store = useInventoryStore()
const parent = inject('parent')

function setSort(field) {
  if (store.sortBy === field) {
    store.sortDirection = store.sortDirection === 'asc' ? 'desc' : 'asc'
  } else {
    store.sortBy = field
    store.sortDirection = 'asc'
  }
}

function openModal(product) {
  parent.openModal(product)
}
</script>

<style scoped>
.inventory-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.list-header {
  padding: 15px 20px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.low-stock-warning {
  color: #d32f2f;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background: #f9f9f9;
  cursor: pointer;
  user-select: none;
}

th:hover {
  background: #f0f0f0;
}
</style>