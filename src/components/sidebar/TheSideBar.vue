<template>
  <div class="sidebar">
    <div class="logo">Dashboard</div>
    <nav class="nav-menu">
      <router-link to="/" class="nav-item" active-class="active">
        <span class="icon">📊</span>
        <span class="text">Dashboard</span>
      </router-link>

      <router-link to="/revenue" class="nav-item" active-class="active">
        <span class="icon">📊</span>
        <span class="text">Revenue</span>
      </router-link>

      <router-link to="/inventory" class="nav-item" active-class="active">
        <span class="icon">🛍️</span>
        <span class="text">Inventory</span>
      </router-link>
      <router-link to="/products" class="nav-item" active-class="active">
        <span class="icon">📦</span>
        <span class="text">Products</span>
      </router-link>
      <router-link to="/settings" class="nav-item" active-class="active">
        <span class="icon">⚙️</span>
        <span class="text">Settings</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
}
</script>

<style scoped>
/* Dashboard Container */
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background: linear-gradient(180deg, #3a7bd5, #00d2ff);
  color: white;
  padding: 20px 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 15px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
}

.icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.text {
  font-size: 0.95rem;
}
</style>
