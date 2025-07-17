<template>
  <div v-if="bannerContent" class="relative z-30 bg-[#f3ead8]/90 text-black/90 py-2 px-4 text-center font-barlow-condensed-medium text-lg">
    <p>{{ bannerContent }}</p>
  </div>
</template>

<script setup>
// Import content directly from JSON file
import contentData from '~/content/content.json'

// Find the top_banner section and extract the content
const bannerContent = computed(() => {
  const topBannerSection = contentData.find(item => item.Section === 'top_banner')
  return topBannerSection?.Content || null
})
</script> 