<template>
  <div v-if="bannerContent" class="relative z-30 bg-cream/90 text-black/90 py-2 px-4 text-center font-barlow-condensed-medium text-lg">
    <p>{{ bannerContent }}</p>
  </div>
</template>

<script setup>
import contentData from '~/content/content.json'

const bannerContent = contentData.find(item => item.Section === 'top_banner')?.Content || ''
</script> 