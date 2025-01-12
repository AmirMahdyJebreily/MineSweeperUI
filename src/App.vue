<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
import { PuzzlePieceIcon, HandRaisedIcon, BanknotesIcon, InformationCircleIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <header>
    <RouterLink class="py-2 px-1 w-10/12 md:w-48 flex-none" to="/">
      <h1 class="w-full">
        <img class="w-full max-w-52 sm:max-w-64" alt="MineSweeper GO" src="./assets/MineSweeper.webp">
      </h1>
    </RouterLink>
    <nav>
      <Menu>
        <li class="nav-list">
          <RouterLink to="/" class="nav-link">
            <PuzzlePieceIcon class="size-5" />
            <span>How to Play?</span>
          </RouterLink>
        </li>
        <li class="nav-list">
          <RouterLink to="/about" class="nav-link">
            <HandRaisedIcon class="size-5"/>
            <span>Contribute</span>
          </RouterLink>
        </li>
        <li class="nav-list">
          <RouterLink to="/" class="nav-link">
            <BanknotesIcon class="size-5"/>
            <span>Donations</span>
          </RouterLink>
        </li>
        <li class="nav-list">
          <RouterLink to="/" class="nav-link">
            <InformationCircleIcon class="size-5"/>
           <span>About Me!</span>
          </RouterLink>
        </li>
      </Menu>
    </nav>
  </header>
  <main class="py-4">
    <RouterView />
  </main>
  <footer>
    <p class="w-full text-center py-2 mt-4 border-t border-stone-500/40 text-xs">With ❤️ by <a class="nav-link" href="https://github.com/AmirMahdyJebreily">CodeAgha</a></p>
  </footer>
</template>

<style lang="postcss" scoped>
header {
  @apply w-full lg:w-10/12 flex items-center justify-between gap-2 bg-gray-50/70 border-2 border-zinc-500 rounded-b-[2.25rem] sm:rounded-full px-6 py-2 sm:py-0.5 sm:mt-3
}

footer {
  @apply w-full
}

nav {
  @apply w-1/12 md:w-full flex items-center justify-end gap-2
}
</style>
