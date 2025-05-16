<template>
  <span class="sort-indicator">
    <svg v-if="isActive && direction === 'asc'" width="12" height="12" viewBox="0 0 24 24">
      <path d="M7 14l5-5 5 5z" />
    </svg>
    <svg v-if="isActive && direction === 'desc'" width="12" height="12" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </span>
</template>

<script setup>
import { useInventoryStore } from '../../stores/useInventoryStore'
import { computed } from 'vue'

const props = defineProps({
  field: {
    type: String,
    required: true,
  },
})

const store = useInventoryStore()
const isActive = computed(() => store.sortBy === props.field)
const direction = computed(() => store.sortDirection)
</script>

<style scoped>
.sort-indicator {
  display: inline-flex;
  margin-left: 5px;
  color: #666;
}

.sort-indicator svg {
  fill: currentColor;
}
</style>
