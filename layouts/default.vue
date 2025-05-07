<template>
  <div class="relative min-h-screen">
    <!-- Background image as <img> -->
    <img :src="BackWall" alt="lots of high end guitars on the wall" class="absolute inset-0 w-full h-full object-cover z-0" />
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/70 z-10 pointer-events-none"></div>
    <!-- Main content -->
    <div class="relative z-20 grid grid-cols-1 md:grid-cols-[320px_1fr] md:grid-rows-[auto_1fr] w-full max-w-7xl mx-auto min-h-screen text-white">
      <!-- Navigation-->
      <nav class="flex flex-wrap items-center justify-center font-barlow-condensed-regular text-xl uppercase p-4 md:col-start-2 md:row-start-1 drop-shadow-sm">
        <NuxtLink to="/" class="px-3 hover:text-red-500 transition-colors">Home</NuxtLink>
        <span>//</span>
        <NuxtLink to="/about" class="px-3 hover:text-red-500 transition-colors">About</NuxtLink>
        <span>//</span>
        <NuxtLink to="/inventory" class="px-3 hover:text-red-500 transition-colors">Inventory</NuxtLink>
        <span>//</span>
        <NuxtLink to="/contact" class="px-2 hover:text-red-500 transition-colors">Contact</NuxtLink>
      </nav>
      <!-- Sidebar -->
      <aside class="max-w-80 mx-auto md:mx-0 bg-[#f3ead8]/88 flex flex-col px-8 pt-2 pb-8 md:row-span-2 md:row-start-1 drop-shadow-2xl max-h-[650px] overflow-auto">
        <div class="font-barlow-condensed-medium flex items-center justify-center text-red-500">
          <img src="assets/fender-red-large.jpg" alt="Fender Logo" class="h-12 mr-2">
          Fender&reg; Authorized Dealer
        </div>
        <div class="flex flex-col items-center mb-14 mt-8">
          <PaulsLogo class="w-55 opacity-88 drop-shadow" />
        </div>
        <div class="flex flex-col flex-1 gap-2">
          <div class="mb-8">
            <a href="https://www.google.com/maps/dir//1108+SW+U.S.+Hwy+40,+Blue+Springs,+MO+64014/@39.0090295,-94.3604932,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87c11b58ec5d021d:0x82f37c3583c19ae!2m2!1d-94.2780918!2d39.0090766?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" class="group flex items-start gap-2 hover:text-red-500 transition-colors">
              <MapPinIcon class="w-5 h-5 text-black group-hover:text-red-500 transition-colors mt-1" />
              <p class="font-barlow-condensed-medium text-2xl text-black group-hover:text-red-500 uppercase leading-tight text-left">1108 SW US HWY 40<br>Blue Springs,<br>Missouri 64014</p>
            </a>
          </div>
          <div class="flex items-center gap-2 mt-auto">
            <a href="tel:8162246868" class="group flex items-center gap-2 font-barlow-condensed-semibold text-3xl text-black tracking-wider text-left hover:text-red-500 transition-colors">
              <PhoneIcon class="w-5 h-5 text-black group-hover:text-red-500 transition-colors" />
              816-224-6868
            </a>
          </div>
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
import BackWall from '~/assets/photos/back_wall_1.png'
import { MapPinIcon, PhoneIcon } from '@heroicons/vue/24/solid'
</script> 