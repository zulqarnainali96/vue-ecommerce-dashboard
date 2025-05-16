<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  value: [Number, String],
  icon: String,
  color: {
    type: String,
    default: 'blue'
  }
})

const formattedValue = computed(() => {
  if (typeof props.value === 'number') {
    return props.value.toLocaleString()
  }
  return props.value
})
</script>

<template>
  <div class="summary-card" :class="color">
    <div class="icon">
      <span class="material-icons">{{ icon }}</span>
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ formattedValue }}</p>
    </div>
  </div>
</template>


<style scoped>
.summary-card {
  flex: 1;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.summary-card.green {
  border-top: 4px solid #4CAF50;
}

.summary-card.blue {
  border-top: 4px solid #2196F3;
}

.summary-card.purple {
  border-top: 4px solid #9C27B0;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.green .icon {
  background: #E8F5E9;
  color: #4CAF50;
}

.blue .icon {
  background: #E3F2FD;
  color: #2196F3;
}

.purple .icon {
  background: #F3E5F5;
  color: #9C27B0;
}

.content h3 {
  margin: 0 0 5px 0;
  color: #666;
  font-size: 1rem;
}

.content p {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}
</style>