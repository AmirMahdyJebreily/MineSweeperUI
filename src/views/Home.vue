<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';

</script>

<template>
    <section class="py-8 flex flex-col items-start justify-center">
        <img src="../assets/MineSweeperSingleLogo.webp" class="size-24 mx-1">
        <h1 class="w-full text-center text-7xl">Minesweeper GO!</h1>
    </section>
    <div class="py-4 mt-4 px-3 w-full rounded-3xl bg-amber-100 prespective-border border-zinc-800">
        <p class="text-2xl py-2 text-center">Game Settings</p>
        <ul class="py-1.5 divide-y-2 divide-stone-400/20 flex flex-col items-stretch justify-center">
            <li>Size: </li>
            <li>Bombs count: </li>
        </ul>
    </div>
</template>