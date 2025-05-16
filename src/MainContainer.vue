<script setup>
import TheSideBar from '@/components/sidebar/TheSideBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TheSideBar />
  <main class="main-content">
    <header class="top-bar">
      <div class="user-profile"></div>
    </header>
    <div class="content-area">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" v-if="Component" />
        </transition>
      </router-view>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  flex: 1;
  margin-left: 250px;
}

.top-bar {
  background-color: white;
  padding: 15px 25px;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.user-profile {
  display: flex;
  height: 40px;
  align-items: center;
  gap: 15px;
}
.welcome {
  font-size: 0.9rem;
  color: #555;
}

.avatar {
  width: 35px;
  height: 35px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.content-area {
  padding: 25px;
  min-height: calc(100vh - 65px);
}
</style>
