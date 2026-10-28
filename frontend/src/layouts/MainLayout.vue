<script setup lang="ts">
import SkipLink from '@/components/SkipLink.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="shell">
    <SkipLink />
    <div class="inner">
      <AppHeader />
      <main id="main-content" tabindex="-1">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.shell {
  min-height: 100vh;
  background:
    radial-gradient(ellipse 80% 50% at 10% -10%, rgb(45 106 79 / 12%), transparent),
    radial-gradient(ellipse 60% 40% at 100% 0%, rgb(196 140 58 / 10%), transparent),
    var(--color-paper);
}

.inner {
  width: min(68rem, calc(100% - 2rem));
  margin: 0 auto;
}

main:focus {
  outline: none;
}

main:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}
</style>
