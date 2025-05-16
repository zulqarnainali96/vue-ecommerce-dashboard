<template>
  <tr :class="{ 'low-stock': product.stock < product.minStock }">
    <td>
      <strong>{{ product.name }}</strong>
      <p class="description">{{ product.description }}</p>
    </td>
    <td>{{ product.category }}</td>
    <td>${{ product.price.toFixed(2) }}</td>
    <td>
      <span :class="{ 'critical': product.stock < product.minStock }">
        {{ product.stock }}
      </span>
      <span v-if="product.stock < product.minStock" class="min-stock">
        (min: {{ product.minStock }})
      </span>
    </td>
    <td>
      <span v-if="product.stock < product.minStock" class="status-badge low">
        Low Stock
      </span>
      <span v-else class="status-badge ok">
        In Stock
      </span>
    </td>
    <td>
      <button @click="$emit('update', product)">Update</button>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['update'])
</script>

<style scoped>
tr.low-stock {
  background-color: #fff8e1;
}

.description {
  margin: 5px 0 0 0;
  color: #666;
  font-size: 0.9rem;
}

.critical {
  color: #d32f2f;
  font-weight: bold;
}

.min-stock {
  color: #666;
  font-size: 0.8rem;
  margin-left: 5px;
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}

.status-badge.ok {
  background: #e8f5e9;
  color: #2e7d32;
}

.status-badge.low {
  background: #ffebee;
  color: #d32f2f;
}

button {
  padding: 6px 12px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0d8aee;
}
</style>