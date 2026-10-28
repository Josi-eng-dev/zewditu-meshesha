<script setup lang="ts">
defineProps<{
  message?: string
}>()
</script>

<template>
  <aside class="pending" role="status">
    <p>{{ message ?? 'Content for this section is pending organizational approval.' }}</p>
  </aside>
</template>

<style scoped>
.pending {
  border: 1px solid var(--color-line);
  background: var(--color-wash);
  padding: 0.85rem 1rem;
  margin: 0 0 1.25rem;
}

.pending p {
  margin: 0;
  color: var(--color-muted);
}
</style>
