<script setup lang="ts">
import ContactChannels from '@/features/contact/ContactChannels.vue'
</script>

<template>
  <footer class="site-footer">
    <p class="org">Zewditu Meshesha Children and Family Welfare and Development Association</p>
    <ContactChannels compact />
    <p class="note">
      Slice A technical scaffold — News, Donate, and Gallery arrive in a later authorized slice.
      No contact form is provided in v1.0.
    </p>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 3rem;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid var(--color-line);
  display: grid;
  gap: 1rem;
}

.org {
  font-weight: 600;
  margin: 0;
}

.note {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-muted);
}
</style>
