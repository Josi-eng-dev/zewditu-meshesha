<template>
  <a class="skip-link" href="#main-content">Skip to main content</a>
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: 0.5rem 1rem;
  z-index: 1000;
}

.skip-link:focus {
  left: 0.5rem;
  top: 0.5rem;
}
</style>
