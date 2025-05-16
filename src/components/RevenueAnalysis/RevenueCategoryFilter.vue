<template>
  <div class="category-filter">
    <label for="category-select">Filter by Category:</label>
    <select id="category-select" v-model="store.selectedCategory">
      <option v-for="category in store.categories" :key="category" :value="category">
        {{ category === 'all' ? 'All Categories' : category }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useRevenueStore } from '../../stores/useRevenueStore'

const store = useRevenueStore()
</script>

<style scoped>
.category-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

select {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>