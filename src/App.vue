<template>
  <div class="app_container">
    <nav class="nav">
      <router-link to="/posts">Posts</router-link>
      <router-link to="/lazy">Lazy</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app_container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav {
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
}

.nav a {
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
}

.nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
