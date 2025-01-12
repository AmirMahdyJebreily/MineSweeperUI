<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="py-2" to="/">
        <img class="w-10/12 max-w-64 mx-auto" alt="Mine Sweeper GO" src="./assets/MineSweeper.webp">
      </RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="postcss" scoped>
header {
  @apply w-full flex items-center justify-center
}

nav {
  @apply w-full flex items-center justify-center
}
</style>
