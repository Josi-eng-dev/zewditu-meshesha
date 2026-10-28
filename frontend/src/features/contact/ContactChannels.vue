<script setup lang="ts">
import { computed } from 'vue'
import { getContactChannels } from '@/lib/contentLoader'
import PendingNotice from '@/components/PendingNotice.vue'

defineProps<{
  compact?: boolean
}>()

const channels = getContactChannels()

const hasChannels = computed(() => {
  return (
    channels.verified &&
    (channels.phones.length > 0 || channels.emails.length > 0 || channels.addressLines.length > 0)
  )
})
</script>

<template>
  <section class="channels" :class="{ compact }" aria-label="Contact channels">
    <PendingNotice v-if="!hasChannels" :message="channels.pendingMessage" />
    <template v-else>
      <ul v-if="channels.phones.length" class="list">
        <li v-for="phone in channels.phones" :key="phone">
          <span class="label">Phone</span>
          <a :href="`tel:${phone.replace(/\s+/g, '')}`">{{ phone }}</a>
        </li>
      </ul>
      <ul v-if="channels.emails.length" class="list">
        <li v-for="email in channels.emails" :key="email">
          <span class="label">Email</span>
          <a :href="`mailto:${email}`">{{ email }}</a>
        </li>
      </ul>
      <address v-if="channels.addressLines.length" class="address">
        <span v-for="(line, i) in channels.addressLines" :key="i" class="line">{{ line }}</span>
      </address>
    </template>
  </section>
</template>

<style scoped>
.channels {
  display: grid;
  gap: 0.75rem;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}

.label {
  display: inline-block;
  min-width: 4rem;
  color: var(--color-muted);
  font-size: 0.85rem;
}

.address {
  font-style: normal;
  display: grid;
  gap: 0.15rem;
}

.compact :deep(.pending) {
  padding: 0.65rem 0.75rem;
  font-size: 0.9rem;
}
</style>
