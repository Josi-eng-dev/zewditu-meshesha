<script setup lang="ts">
import { computed } from 'vue'
import { renderSafeMarkdown } from '@/lib/markdown'

const props = defineProps<{
  markdown: string
}>()

const html = computed(() => renderSafeMarkdown(props.markdown))
</script>

<template>
  <!-- Sanitized Markdown only — parser disables author HTML; DOMPurify strips the rest -->
  <div class="prose" v-html="html" />
</template>

<style scoped>
.prose :deep(h1) {
  font-family: var(--font-display);
  font-size: 1.85rem;
  margin: 0 0 0.75rem;
}

.prose :deep(h2) {
  font-size: 1.35rem;
  margin: 1.5rem 0 0.5rem;
}

.prose :deep(p),
.prose :deep(ul) {
  margin: 0 0 0.85rem;
  line-height: 1.65;
}

.prose :deep(a) {
  color: var(--color-accent);
}
</style>
