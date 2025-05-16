<script setup>
import { products } from '../data/products.js'
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.productId">
      <strong>{{ product.name }}</strong> - {{ product.author }} <br />
      <img :src="product.imageUrl" alt="book cover" width="100" />
    </li>
  </ul>
</template>
