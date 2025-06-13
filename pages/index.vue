<template>
  <section class="bg-black/66 p-6 pb-10 rounded-sm">
    <h1 class="font-barlow-condensed-medium text-4xl leading-tight uppercase text-left drop-shadow-sm mb-3">Welcome!</h1>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed">
      We are a family owned and operated “brick and mortar” retail guitar shop that has been serving Blue Springs and the greater Kansas City, Missouri area since 2018. When you come in you'll always find Paul with a smile and a helping hand. It is our absolute pleasure to serve musicians of all ages and skill levels. Come on in and feel free to browse around, ask questions or try out an instrument. We're here to help you find the perfect gear for your needs. All are welcome here! We are open Tuesday through Saturday, and closed on Sundays and Mondays.
    </p> 
  </section>
  <section class="mt-10 px-7">
    <div class="flex items-center gap-2 mb-5">
      <ChevronDoubleRightIcon class="w-7 h-7 text-red-500" />
      <h2 class="font-barlow-condensed-medium text-3xl leading-tight uppercase text-left drop-shadow-sm">
        GREAT DEALS ON NEW FENDER® GUITARS, AMPS, AND ACCESSORIES
        <NuxtLink to="/contact" class="text-base font-barlow-condensed-regular hover:underline ml-2 whitespace-nowrap">in store</NuxtLink>
      </h2>
    </div>
    <div class="flex items-center gap-2 mb-5">
      <ChevronDoubleRightIcon class="w-7 h-7 text-red-500" />
      <h2 class="font-barlow-condensed-medium text-3xl leading-tight uppercase text-left drop-shadow-sm flex items-center gap-2">
        WE BUY AND SEAL USED GUITARS, AMPS, & GEAR
        <NuxtLink to="/inventory" class="text-base font-barlow-condensed-regular hover:underline ml-2 whitespace-nowrap">sample inventory</NuxtLink>
      </h2>
    </div>
    <div class="flex items-center gap-2 mb-5">
      <ChevronDoubleRightIcon class="w-7 h-7 text-red-500" />
      <h2 class="font-barlow-condensed-medium text-3xl leading-tight uppercase text-left drop-shadow-sm">
        AFFORDABLE, PROFESSIONAL GUITAR TECH SERVICES
        <NuxtLink to="/services" class="text-base font-barlow-condensed-regular hover:underline ml-2 whitespace-nowrap">listing</NuxtLink>
      </h2>
    </div>
  </section>
</template>

<script setup>
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'
import { NuxtLink } from '#components'
definePageMeta({
  layout: 'default'
})
</script> 