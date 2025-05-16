<script setup>
import { useProductStore } from '../../stores/useProductStore'
import ImageUploader from './ImageUploader.vue'

const store = useProductStore()

function submitForm() {
  store.submitForm()
}
</script>

<template>
  <form @submit.prevent="submitForm" class="product-form">
    <div class="form-group">
      <label for="name">Product Name*</label>
      <input type="text" id="name" v-model="store.formData.name" required />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" v-model="store.formData.description" rows="3"></textarea>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="category">Category*</label>
        <select id="category" v-model="store.formData.category" required>
          <option value="" disabled>Select a category</option>
          <option v-for="category in store.categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="price">Price*</label>
        <input type="number" id="price" v-model.number="store.formData.price" min="0" step="0.01" required />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="stock">Initial Stock*</label>
        <input type="number" id="stock" v-model.number="store.formData.stock" min="0" required />
      </div>

      <div class="form-group">
        <label for="minStock">Minimum Stock Level*</label>
        <input type="number" id="minStock" v-model.number="store.formData.minStock" min="0" required />
      </div>
    </div>

    <div class="form-group">
      <label>Product Image</label>
      <ImageUploader v-model="store.formData.image" />
    </div>

    <div class="form-actions">
      <button type="submit" class="submit-btn">Register Product</button>
    </div>
  </form>
</template>



<style scoped>
.product-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-row .form-group {
  flex: 1;
}

.form-actions {
  margin-top: 20px;
}

.submit-btn {
  padding: 12px 24px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #3e8e41;
}
</style>