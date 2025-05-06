<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/inventory">Inventory</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Paul's Guitar Shop</p>
    </footer>
  </div>
</template>

<script setup>
// Layout component logic can be added here if needed
</script>

<style>
/* Add any global styles here */
</style> 