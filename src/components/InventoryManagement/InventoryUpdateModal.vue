<script setup>
import { ref, watch } from 'vue'
import { useInventoryStore } from '../../stores/useInventoryStore'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const store = useInventoryStore()
const stockValue = ref(props.product.stock)

watch(() => props.product, (newProduct) => {
  stockValue.value = newProduct.stock
})

function updateStock() {
  store.updateStock(props.product.id, stockValue.value)
  emit('close')
}
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">&times;</button>

      <h2>Update Inventory</h2>
      <p class="product-name">{{ product.name }}</p>

      <div class="form-group">
        <label for="stock">Current Stock:</label>
        <input type="number" id="stock" v-model.number="stockValue" min="0" />
        <p class="min-stock">Minimum stock level: {{ product.minStock }}</p>
      </div>

      <div class="form-actions">
        <button @click="$emit('close')">Cancel</button>
        <button @click="updateStock" :disabled="stockValue === product.stock">
          Update
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 25px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.product-name {
  font-weight: bold;
  margin: 10px 0 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.min-stock {
  margin-top: 5px;
  color: #666;
  font-size: 0.9rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.form-actions button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions button:first-child {
  background: #f5f5f5;
  border: 1px solid #ddd;
}

.form-actions button:last-child {
  background: #4CAF50;
  color: white;
  border: none;
}

.form-actions button:last-child:disabled {
  background: #cccccc;
  cursor: not-allowed;
}
</style>