<template>
  <section>
    <h1 class="font-barlow-condensed-medium text-4xl leading-tight uppercase text-left drop-shadow-sm mb-3">Services & Pricing</h1>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed mb-8">
      We offer professional luthier services every week for both electric and acoustic instruments. Below are our most common setup services and prices for standard 4-6 string guitars and basses. *Please note our technician is an independent contractor and is not employed by our business.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <!-- Electric Category -->
      <div class="bg-[#f3ead8]/66 rounded-lg shadow-md p-6 flex flex-col">
        <h2 class="font-barlow-condensed-semibold text-2xl text-black mb-4 uppercase tracking-wide text-center">Electric</h2>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Setup</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Cleaning</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Electronics Cleaning</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2">
          <span>Pick Guard Replacement</span>
        </div>
      </div>
      <!-- Acoustic Category -->
      <div class="bg-[#f3ead8]/66 rounded-lg shadow-md p-6 flex flex-col">
        <h2 class="font-barlow-condensed-semibold text-2xl text-black mb-4 uppercase tracking-wide text-center">Acoustic</h2>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Setup</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Cleaning</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Nut Replacement</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2 border-b border-black/10">
          <span>Bridge Replacement</span>
        </div>
        <div class="flex justify-between items-center font-barlow-condensed-regular text-lg text-black/90 py-2">
          <span>Pick Guard Replacement</span>
        </div>
      </div>
    </div>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed mt-8">
      This is a general guide to our services, please inquire for current pricing, availability and special requests. If you are somehow unsatisfied with your instrument after returning from us, we will gladly make adjustments at no additional charge within reason. 
    </p>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 