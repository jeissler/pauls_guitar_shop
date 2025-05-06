<template>
  <!-- Sidebar -->
  <aside class="w-80 bg-[#f3ead8] flex flex-col px-8 pt-2 pb-8">
      <div class="font-barlow-condensed-medium flex items-center justify-center text-red-500">
        <img src="assets/fender-red-large.jpg" alt="Fender Logo" class="h-12 mr-2">
        Fender&reg; Authorized Dealer
      </div>
      <div class="flex flex-col items-center mb-12 mt-8">
        <PaulsLogo class="w-55 opacity-77 drop-shadow" />
      </div>
      <div class="flex flex-col flex-1">
        <div class="mb-8">
          <p class="font-barlow-condensed-semibold text-3xl text-black uppercase leading-tight mb-2 text-left">WE BUY AND SELL<br>USED GEAR</p>
        </div>
        <div class="mb-8">
          <p class="font-barlow-condensed-medium text-2xl text-black uppercase leading-tight mb-2 text-left">604 US 40 HWY<br>BLUE SPRINGS,<br>MISSOURI 64014</p>
        </div>
        <div class="mt-auto">
          <p class="font-barlow-condensed-semibold text-3xl text-black tracking-wider text-left">816-224-6868</p>
        </div>
      </div>
    </aside>
    <!-- Main Content -->
    <main class="flex-1 p-8">
      <slot />
    </main>
</template>

<script setup>
import PaulsLogo from '~/assets/pauls_logo.svg'
</script> 