<script setup lang="ts">
import { Squares2X2Icon } from '@heroicons/vue/24/solid';
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

function RandomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
}

const Columns = ref(RandomBetween(14, 24))
const Rows = ref(RandomBetween(16, 30))
const Bombs = ref(Math.floor(((Columns.value * Rows.value) * 0.21) - RandomBetween(1, 3)))

const Key = ref(1)
const router = useRouter()

async function RandomChoiceHandler() {
    Key.value = (Key.value == 1)? 0 : 1
    setTimeout(() => {
        Columns.value = RandomBetween(14, 24)
    }, 166)
    setTimeout(() => {
        Rows.value = RandomBetween(16, 30)
    }, 166)
    setTimeout(() => {
        Bombs.value = Math.floor(((Columns.value * Rows.value) * 0.21) - RandomBetween(1, 3))

    }, 166)
}

const routeToPlay = () => {
    let pathparams = ""
    try {
        pathparams = btoa(JSON.stringify({ cols: Columns.value, rows: Rows.value, bombs: Bombs.value }))
    } catch {
        return
    }
    router.push({ name: 'play', params: { playcode: pathparams } })
}
</script>

<template>
    <section class="py-8 flex flex-col items-center justify-center">
        <img src="../assets/MineSweeper.png" class="size-24 mx-1">
        <h1 class="w-full text-center text-3xl sm:text-6xl lg:text-7xl font-black">Minesweeper GO!</h1>
    </section>
    <div
        class="py-4 mt-4 px-3 w-full rounded-3xl bg-amber-100 prespective-border border-zinc-800 flex flex-col items-center justify-center">
        <p class="text-2xl pt-2 pb-0.5 text-center font-bold">Game Settings</p>
        <p class="text-lg pt-1 pb-3">Choose your game settings. How do you like to play?</p>
        <section class="flex flex-col items-start justify-center w-9/12">
            <lable class="flex w-full items-center justify-start gap-2 pt-6 pb-3">
                <span class="flex-none text-base sm:text-lg">Size:</span>
                <div class="w-full flex-1 inline-flex items-center justify-center gap-1">
                    <input name="columns" type="number" required class="input" placeholder="Columns" v-model="Columns">
                    <span class="flex-none text-2xl">×</span>
                    <input name="columns" type="number" required class="input" placeholder="Rows" v-model="Rows">
                </div>
            </lable>
            <lable class="flex w-full items-center justify-start gap-2 pb-6 pt-3">
                <span class="flex-none text-base sm:text-lg">Bombs:</span>
                <div class="w-full flex-1 inline-flex items-center justify-center gap-1">
                    <input name="columns" type="number" required class="input" placeholder="Bombs" v-model="Bombs">
                </div>
            </lable>
        </section>
        <Transition name="slide-up">
            <button @click="RandomChoiceHandler"
                class="flex items-center relative justify-center size-[36px] p-0 overflow-hidden border-2 bg-zinc-700 border-zinc-700 rounded-md">
                <img :key="Key" class="dice-image animate-dice1" src="../assets/dices/dice_one_64px.png" alt="dice1" />
                <img :key="Key" class="dice-image animate-dice2" src="../assets/dices/dice_two_64px.png" alt="dice2" />
                <img :key="Key" class="dice-image animate-dice3" src="../assets/dices/dice_three_64px.png"
                    alt="dice3" />
                <img :key="Key" class="dice-image animate-dice4" src="../assets/dices/dice_four_64px.png" alt="dice4" />
                <img :key="Key" class="dice-image animate-dice5" src="../assets/dices/dice_five_64px.png" alt="dice5" />
                <img :key="Key" class="dice-image animate-dice6" src="../assets/dices/dice_six_64px.png" alt="dice6" />
            </button>
        </Transition>
        <button @click="routeToPlay"
            class="px-5 py-0.5 bg-zinc-800 border-2 border-zinc-800 hover:bg-transparent hover:text-zinc-800 transition-colors rounded-full text-zinc-50 my-2 font-semibold text-lg">
            Play</button>
    </div>
</template>

<style lang="postcss" scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>