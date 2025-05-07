<template>
  <section>
    <h1 class="font-barlow-condensed-medium text-4xl leading-tight uppercase text-left drop-shadow-sm mb-3">Services & Pricing</h1>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed mb-8">
      We offer professional luthier services every week for both electric and acoustic instruments. Below are our most common setup services and prices for standard 4-6 string guitars and basses.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <!-- Electric Category -->
      <div class="bg-[#f3ead8]/66 rounded-lg shadow-md p-6 flex flex-col">
        <h2 class="font-barlow-condensed-semibold text-2xl text-black mb-4 uppercase tracking-wide text-center">Electric</h2>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Setup</span>
          <span class="font-semibold text-red-600">$70</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Cleaning</span>
          <span class="font-semibold text-red-600">$20</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Electronics Cleaning</span>
          <span class="font-semibold text-red-600">$20</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2">
          <span>Pick Guard Replacement</span>
          <span class="font-semibold text-red-600">$10</span>
        </div>
      </div>
      <!-- Acoustic Category -->
      <div class="bg-[#f3ead8]/66 rounded-lg shadow-md p-6 flex flex-col">
        <h2 class="font-barlow-condensed-semibold text-2xl text-black mb-4 uppercase tracking-wide text-center">Acoustic</h2>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Setup</span>
          <span class="font-semibold text-red-600">$80</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Cleaning</span>
          <span class="font-semibold text-red-600">$15</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Nut Replacement</span>
          <span class="font-semibold text-red-600">$20</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Bridge Replacement</span>
          <span class="font-semibold text-red-600">$50</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2">
          <span>Pick Guard Replacement</span>
          <span class="font-semibold text-red-600">$25</span>
        </div>
      </div>
    </div>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed mt-8">
      This is a general guide to pricing, please inquire with any special requests. If you are somehow unsatisfied with your instrument after returning from us, we will gladly make adjustments at no additional charge within reason. 
    </p>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 