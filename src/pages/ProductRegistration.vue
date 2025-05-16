<template>
  <div class="product-registration">
    <h1>Product Registration</h1>
    
    <FormSuccess v-if="store.isSubmitted" @continue="store.isSubmitted = false" />
    <ProductForm v-else />
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/useProductStore'
import ProductForm from '../components/ProductRegistration/ProductForm.vue'
import FormSuccess from '../components/ProductRegistration/FormSuccess.vue'

const store = useProductStore()
</script>

<style scoped>
.product-registration {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>