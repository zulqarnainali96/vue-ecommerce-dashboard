<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)
const previewUrl = ref(null)

watch(() => props.modelValue, (newValue) => {
  if (!newValue) {
    previewUrl.value = null
  }
})

function triggerFileInput() {
  fileInput.value.click()
}

function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    previewUrl.value = URL.createObjectURL(file)
    emit('update:modelValue', file)
  }
}

function removeImage() {
  previewUrl.value = null
  emit('update:modelValue', null)
  fileInput.value.value = ''
}
</script>

<template>
  <div class="image-uploader">
    <div v-if="!previewUrl" class="upload-area" @click="triggerFileInput">
      <span>Click to upload image</span>
      <input type="file" ref="fileInput" accept="image/*" @change="handleFileChange" style="display: none" />
    </div>
    <div v-else class="preview-area">
      <img :src="previewUrl" alt="Product preview" />
      <button @click="removeImage" class="remove-btn">Remove</button>
    </div>
  </div>
</template>



<style scoped>
.image-uploader {
  margin-top: 10px;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s;
}

.upload-area:hover {
  border-color: #4CAF50;
}

.preview-area {
  position: relative;
  margin-top: 10px;
}

.preview-area img {
  max-width: 100%;
  max-height: 200px;
  display: block;
  border-radius: 4px;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.remove-btn:hover {
  background: rgba(0, 0, 0, 0.9);
}
</style>