<template>
  <ag-grid-vue :rowData="rowData" :columnDefs="colDefs" style="height: 500px"> </ag-grid-vue>
  <!-- <TheProductList /> -->
</template>

<script>
// import TheProductList from '../components/TheProductList.vue'
import { AgGridVue } from 'ag-grid-vue3'
import { ref } from 'vue'

export default {
  name: 'TheInventory',
  components: {
    AgGridVue, // Add Vue Data Grid component
  },
  setup() {
    const rowData = ref([
      { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
      { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
      { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ])

    // Column Definitions: Defines the columns to be displayed.
    const colDefs = ref([
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
      { field: 'electric' },
    ])

    return {
      rowData,
      colDefs,
    }
  },
}
</script>
