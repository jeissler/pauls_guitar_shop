<template>
  <section class="bg-black/66 p-6 pb-10">
    <h1 class="font-barlow-condensed-medium text-4xl leading-tight uppercase text-left drop-shadow-sm mb-3">Have Questions?</h1>
    <p class="font-barlow-condensed-regular text-xl text-left leading-relaxed">
      We've got answers, usually, or can at least point you in the right direction. Feel free to call or stop by our location. 
    </p> 
    <!-- Hours and Map Flex Row -->
    <div class="flex flex-col md:flex-row gap-8 mt-10 items-stretch justify-center">
      <div class="max-w-md w-full md:w-96 mx-auto md:mx-0">
        <h2 class="font-barlow-condensed-semibold text-2xl text-white mb-3 text-center uppercase tracking-wide">Open Hours</h2>
        <ul class="font-barlow-condensed-regular text-lg space-y-1 text-center">
          <li><span class="font-semibold">Monday:</span> Closed</li>
          <li><span class="font-semibold">Tuesday:</span> 11:00am – 6:00pm</li>
          <li><span class="font-semibold">Wednesday:</span> 11:00am – 6:00pm</li>
          <li><span class="font-semibold">Thursday:</span> 11:00am – 6:00pm</li>
          <li><span class="font-semibold">Friday:</span> 11:00am – 6:00pm</li>
          <li><span class="font-semibold">Saturday:</span> 10:00am – 5:00pm</li>
          <li><span class="font-semibold">Sunday:</span> Closed</li>
        </ul>
      </div>
      <div class="rounded-lg overflow-hidden shadow-lg w-full max-w-2xl aspect-video mx-auto md:mx-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.964964857624!2d-94.2802666846426!3d39.00907657954837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c11b58ec5d021d%3A0x82f37c3583c19ae!2s1108%20SW%20U.S.%20Hwy%2040%2C%20Blue%20Springs%2C%20MO%2064014!5e0!3m2!1sen!2sus!4v1715630000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 