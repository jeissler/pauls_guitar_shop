<template>
  <div class="bg-black-900 text-white min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-[320px_1fr] md:grid-rows-[auto_1fr] w-full max-w-7xl mx-auto min-h-screen">
      <!-- Navigation-->
      <nav class="flex flex-wrap items-center justify-center font-barlow-condensed-light text-xl uppercase p-4 md:col-start-2 md:row-start-1">
        <NuxtLink to="/" class="px-3 hover:text-red-500 transition-colors">Home</NuxtLink>
        <span>//</span>
        <NuxtLink to="/about" class="px-3 hover:text-red-500 transition-colors">About</NuxtLink>
        <span>//</span>
        <NuxtLink to="/inventory" class="px-3 hover:text-red-500 transition-colors">Inventory</NuxtLink>
        <span>//</span>
        <NuxtLink to="/contact" class="px-2 hover:text-red-500 transition-colors">Contact</NuxtLink>
      </nav>
      <!-- Sidebar -->
      <aside class="max-w-80 mx-auto md:mx-0 bg-[#f3ead8] flex flex-col px-8 pt-2 pb-8 md:row-span-2 md:row-start-1">
        <div class="font-barlow-condensed-medium flex items-center justify-center text-red-500">
          <img src="assets/fender-red-large.jpg" alt="Fender Logo" class="h-12 mr-2">
          Fender&reg; Authorized Dealer
        </div>
        <div class="flex flex-col items-center mb-12 mt-8">
          <PaulsLogo class="w-55 opacity-88 drop-shadow" />
        </div>
        <div class="flex flex-col flex-1">
          <p class="font-barlow-condensed-semibold text-3xl text-black uppercase leading-tight mb-8 text-left">WE BUY AND SELL<br>USED GEAR</p>
          <p class="font-barlow-condensed-medium text-2xl text-black uppercase leading-tight mb-8 text-left">1108 SW US HWY 40<br>Blue Springs,<br>Missouri 64014</p>
          <a href="tel:8162246868" class="font-barlow-condensed-semibold text-3xl text-black tracking-wider text-left hover:text-red-500 transition-colors mt-auto">816-224-6868</a>
        </div>
      </aside>
      <!-- Main Content -->
      <main class="p-8 md:col-start-2 md:row-start-2">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import PaulsLogo from '~/assets/pauls_logo.svg'
</script> 