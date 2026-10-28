<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getPageContent } from '@/lib/contentLoader'
import ContentBlock from '@/components/ContentBlock.vue'
import PendingNotice from '@/components/PendingNotice.vue'
import ContactChannels from '@/features/contact/ContactChannels.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const route = useRoute()

const page = computed(() => {
  const slug = typeof route.meta.pageSlug === 'string' ? route.meta.pageSlug : ''
  return getPageContent(slug)
})

watchEffect(() => {
  if (!page.value) return
  document.title = `${page.value.title} · Zewditu Meshesha`
  const desc = document.querySelector('meta[name="description"]')
  if (desc) {
    desc.setAttribute('content', page.value.description)
  }
})
</script>

<template>
  <NotFoundPage v-if="!page" />
  <article v-else class="page">
    <PendingNotice
      v-if="!page.contentApproved"
      message="Scaffold content — organizational approval for publishable copy is still pending."
    />
    <ContentBlock :markdown="page.bodyMarkdown" />
    <ContactChannels v-if="page.slug === 'contact'" />
  </article>
</template>

<style scoped>
.page {
  padding: 1.75rem 0 1rem;
}
</style>
