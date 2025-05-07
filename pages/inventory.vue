<template>
  <section>
    <h1 class="font-barlow-condensed-medium text-4xl leading-tight uppercase text-left drop-shadow-sm mb-3">Comin Soon!</h1>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed mb-8">
      We are currently working on getting our inventory catalog complete. Please check back soon for the most up-to-date information.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
      <!-- First row: Fender Logo, Back Wall 2, Side Wall -->
      <div class="md:col-span-2 bg-[#f3ead8]/77 p-6 rounded-lg shadow-lg flex items-center justify-center">
        <img :src="FenderLogo" alt="Fender Authorized Dealer" class="h-32 w-full object-contain" />
      </div>
      <div class="bg-[#f3ead8]/88 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/back_wall_2.png" alt="Store Back Wall 2" class="w-full h-full object-cover rounded">
      </div>
      <div class="bg-[#f3ead8]/77 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/side_wall.png" alt="Store Side Wall" class="w-full h-full object-cover rounded">
      </div>

      <!-- Tall items -->
      <div class="md:row-span-2 bg-[#f3ead8]/77 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/player_2.png" alt="12 String Guitar Head" class="w-full h-full object-cover rounded">
      </div>
      <div class="md:row-span-2 bg-[#f3ead8]/77 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/epiphone.png" alt="Fender Deluxe Reverb" class="w-full h-full object-cover rounded">
      </div>

      <!-- Rectangle (wide) items grouped together -->
      <div class="md:col-span-2 bg-[#f3ead8]/77 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/amps.png" alt="Guitar Amplifiers" class="w-full h-full object-cover rounded">
      </div>
      <div class="md:col-span-2 bg-[#f3ead8]/77 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/back_wall_1.png" alt="Store Back Wall 1" class="w-full h-full object-cover rounded">
      </div>

      <!-- Square items grouped together -->
      <div class="md:col-span-2 bg-[#f3ead8]/77 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/pedal_case.png" alt="Pedal Case" class="w-full h-full object-cover rounded">
      </div>
      <div class="bg-[#f3ead8]/77 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/12_string_bridge.png" alt="12 String Guitar Bridge" class="w-full h-full object-cover rounded">
      </div>
      <div class="bg-[#f3ead8]/88 p-4 rounded-lg shadow-lg overflow-hidden">
        <img src="~/assets/photos/multi_effects.png" alt="Multi Effects Pedals" class="w-full h-full object-cover rounded">
      </div>
    </div>
  </section>
</template>

<script setup>
import FenderLogo from '~/assets/fender-red-large.jpg'
</script> 