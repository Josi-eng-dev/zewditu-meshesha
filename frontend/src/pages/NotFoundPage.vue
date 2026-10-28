<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Not found · Zewditu Meshesha'
})
</script>

<template>
  <section class="missing" aria-labelledby="missing-title">
    <h1 id="missing-title">Page not found</h1>
    <p>
      This path is not on the approved content allowlist, or it belongs to a later implementation
      slice (News, Donate, Gallery).
    </p>
    <p>
      <RouterLink to="/">Return home</RouterLink>
    </p>
  </section>
</template>

<style scoped>
.missing {
  padding: 2rem 0;
}

.missing h1 {
  font-family: var(--font-display);
}
</style>
