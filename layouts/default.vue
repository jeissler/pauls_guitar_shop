<template>
  <div class="relative min-h-screen">
    <!-- Background image as <img> -->
    <img :src="background" alt="lots of high end guitars on the wall" class="absolute inset-0 w-full h-full object-cover z-0" />
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/70 z-10 pointer-events-none"></div>
    <!-- Main content -->
    <div class="relative z-20 grid grid-cols-1 md:grid-cols-[320px_1fr] md:grid-rows-[auto_1fr] w-full max-w-7xl mx-auto min-h-screen text-white">
      <!-- Navigation-->
      <nav class="flex flex-wrap items-center justify-center font-barlow-condensed-regular text-xl uppercase p-4 md:col-start-2 md:row-start-1 drop-shadow-sm">
        <div class="flex items-center gap-1 px-3">
          <ChevronDoubleRightIcon v-if="route.path === '/'" class="w-5 h-5 text-red-500/77" />
          <NuxtLink to="/" :class="['transition-colors', route.path === '/' ? 'text-red-500' : 'hover:text-red-500']">About</NuxtLink>
        </div>
        <span>//</span>
        <div class="flex items-center gap-1 px-3">
          <ChevronDoubleRightIcon v-if="route.path === '/inventory'" class="w-5 h-5 text-red-500/77" />
          <NuxtLink to="/inventory" :class="['transition-colors', route.path === '/inventory' ? 'text-red-500' : 'hover:text-red-500']">Inventory</NuxtLink>
        </div>
        <span>//</span>
        <div class="flex items-center gap-1 px-3">
          <ChevronDoubleRightIcon v-if="route.path === '/services'" class="w-5 h-5 text-red-500/77" />
          <NuxtLink to="/services" :class="['transition-colors', route.path === '/services' ? 'text-red-500' : 'hover:text-red-500']">Services</NuxtLink>
        </div>
        <span>//</span>
        <div class="flex items-center gap-1 px-3">
          <ChevronDoubleRightIcon v-if="route.path === '/contact'" class="w-5 h-5 text-red-500/77" />
          <NuxtLink to="/contact" :class="['transition-colors', route.path === '/contact' ? 'text-red-500' : 'hover:text-red-500']">Contact</NuxtLink>
        </div>
      </nav>
      <!-- Sidebar -->
      <aside class="w-full max-w-90 md:max-w-80 mx-auto md:mx-0 bg-[#f3ead8]/88 flex flex-col px-8 pt-2 pb-8 md:row-span-2 md:row-start-1 drop-shadow-2xl">
        <div class="font-barlow-condensed-medium flex items-center justify-center text-red-500">
          <img src="assets/fender-red-large.jpg" alt="Fender Logo" class="h-12 mr-2">
          Fender&reg; Authorized Dealer
        </div>
        <div class="flex flex-col items-center mb-12 mt-8">
          <NuxtLink to="/">
            <PaulsLogo class="w-55 opacity-88 drop-shadow hover:opacity-100 transition-opacity" />
          </NuxtLink>
        </div>
        <div class="flex flex-col flex-1 gap-2">
          <div class="mb-6">
            <a href="https://www.google.com/maps/dir//1108+SW+U.S.+Hwy+40,+Blue+Springs,+MO+64014/@39.0090295,-94.3604932,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87c11b58ec5d021d:0x82f37c3583c19ae!2m2!1d-94.2780918!2d39.0090766?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" class="group flex items-start gap-2 hover:text-red-500 transition-colors">
              <MapPinIcon class="w-5 h-5 text-black group-hover:text-red-500 transition-colors mt-1" />
              <p class="font-barlow-condensed-medium text-2xl text-black group-hover:text-red-500 uppercase leading-tight text-left">1108 SW US HWY 40<br>Blue Springs,<br>Missouri 64014</p>
            </a>
          </div>
          <div class="flex items-center gap-2 mb-12">
            <a href="tel:8162246868" class="group flex items-center gap-2 font-barlow-condensed-semibold text-3xl text-black tracking-wider text-left hover:text-red-500 transition-colors">
              <PhoneIcon class="w-5 h-5 text-black group-hover:text-red-500 transition-colors" />
              816-598-8378
            </a>
          </div>
        </div>
        <!-- Facebook Button -->
        <div class="flex items-center justify-center mt-auto">
          <a href="https://facebook.com/paulsguitarshop" target="_blank" rel="noopener" class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors shadow-md text-white rounded font-barlow-condensed-medium text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
            </svg>
            Follow us
          </a>
        </div>
      </aside>
      <!-- Main Content -->
      <main class="p-8 pb-20 md:col-start-2 md:row-start-2">
        <slot />
      </main>
      <!-- Footer -->
      <footer class="absolute bottom-2 right-4 text-sm text-white/70 font-barlow-condensed-regular z-50 select-none pointer-events-none">
        &copy; {{ year }} Paul's Guitar Shop All Rights Reserved
      </footer>
    </div>
  </div>
</template>

<script setup>
import PaulsLogo from '~/assets/pauls_logo.svg'
import BackWall from '~/assets/photos/back_wall_1.png'
import SideWall from '~/assets/photos/side_wall.png'
import Player2 from '~/assets/photos/player_2.png'
import DeluxeReverb from '~/assets/photos/deluxe_reverb.png'
import { MapPinIcon, PhoneIcon, ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
const year = new Date().getFullYear()
const route = useRoute()
const background = computed(() => {
  if (route.path === '/contact') {
    return DeluxeReverb
  }
  if (route.path === '/inventory') {
    return SideWall
  }
  if (route.path === '/services') {
    return Player2
  }
  return BackWall
})
</script> 