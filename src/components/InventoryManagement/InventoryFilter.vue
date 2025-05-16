<script setup>
import { useInventoryStore } from '../../stores/useInventoryStore'

const store = useInventoryStore()
</script>


<template>
  <div class="inventory-filter">
    <div class="search-box">
      <input 
        type="text" 
        v-model="store.searchQuery" 
        placeholder="Search products..."
      />
    </div>
    
    <div class="filter-controls">
      <select v-model="store.selectedCategory">
        <option value="all">All Categories</option>
        <option 
          v-for="category in store.categories" 
          :key="category" 
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      
      <label class="toggle">
        <input type="checkbox" v-model="store.showLowStockOnly">
        Show Low Stock Only
      </label>
    </div>
  </div>
</template>


<style scoped>
.inventory-filter {
  background: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.search-box input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 250px;
}

.filter-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.toggle input {
  margin: 0;
}
</style>