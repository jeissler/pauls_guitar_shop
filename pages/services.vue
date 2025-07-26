<template>
  <section>
    <h1 class="font-barlow-condensed-medium text-4xl leading-tight uppercase text-left drop-shadow-sm mb-3">Services & Pricing</h1>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed mb-8">
      {{ servicesIntro }}
    </p>

    <div class="bg-[#f3ead8]/66 rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li v-for="(service, idx) in servicesList" :key="idx" class="font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10 flex items-center">
          <span>{{ service }}</span>
        </li>
      </ul>
    </div>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed mt-8">
      {{ servicesFooter }}
    </p>
  </section>
</template>

<script setup>
import contentData from '~/content/content.json'

const servicesIntro = contentData.find(e => e.Section === 'services')?.Content || ''
const servicesList = (contentData.find(e => e.Section === 'services_list')?.Content || '').split('\n')
const servicesFooter = contentData.find(e => e.Section === 'services_footer')?.Content || ''
</script> 