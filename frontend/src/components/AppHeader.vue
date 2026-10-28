<script setup lang="ts">
import AppNav from './AppNav.vue'
</script>

<template>
  <header class="site-header">
    <div class="brand">
      <RouterLink to="/" class="brand-link">
        <span class="brand-name">Zewditu Meshesha</span>
        <span class="brand-tag">Children and Family Welfare Association</span>
      </RouterLink>
    </div>
    <AppNav />
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--color-line);
}

.brand-link {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  color: inherit;
  text-decoration: none;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
}

.brand-tag {
  font-size: 0.85rem;
  color: var(--color-muted);
  max-width: 22rem;
}
</style>
