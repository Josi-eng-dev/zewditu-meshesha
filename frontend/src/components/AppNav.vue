<script setup lang="ts">
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/activities', label: 'Activities' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <nav class="nav" aria-label="Primary">
    <ul>
      <li v-for="link in links" :key="link.to">
        <RouterLink :to="link.to" active-class="is-active">{{ link.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  color: var(--color-ink);
  text-decoration: none;
  font-weight: 600;
}

.nav a:hover,
.nav a:focus-visible,
.nav a.is-active {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>
