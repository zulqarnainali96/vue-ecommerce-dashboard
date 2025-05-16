<template>
  <div class="success-container">
    <div class="success-card">
      <div class="success-icon">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      
      <h2 class="success-title">Product Registered Successfully!</h2>
      
      <p class="success-message">
        The new product has been added to your inventory and is now available across the dashboard.
      </p>
      
      <div class="success-actions">
        <button 
          @click="handleContinue" 
          class="continue-btn"
        >
          Add Another Product
        </button>
        <router-link 
          to="/inventory" 
          class="inventory-link"
        >
          View Inventory
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['continue'])

function handleContinue() {
  emit('continue')
}
</script>

<style scoped>
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.success-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.success-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background-color: #e8f5e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-icon svg {
  width: 40px;
  height: 40px;
  fill: #4CAF50;
}

.success-title {
  color: #2e7d32;
  margin-bottom: 16px;
  font-size: 1.5rem;
}

.success-message {
  color: #666;
  margin-bottom: 32px;
  line-height: 1.6;
}

.success-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.continue-btn {
  padding: 12px 24px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.continue-btn:hover {
  background: #3e8e41;
}

.inventory-link {
  padding: 12px 24px;
  background: white;
  color: #4CAF50;
  border: 1px solid #4CAF50;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.inventory-link:hover {
  background: #f5f5f5;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .success-card {
    padding: 30px 20px;
  }
  
  .success-icon {
    width: 60px;
    height: 60px;
  }
  
  .success-title {
    font-size: 1.3rem;
  }
}
</style>