<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

const ModalToggled = ref(false)
function ToggleModal(show: boolean) {
    ModalToggled.value = show
}

const route = useRoute()

watch(() => route.name, () => {
    ToggleModal(false)
});

</script>

<template>
    <Teleport to="#app">
        <Transition>
            <div v-if="ModalToggled" class="modal-back" @click.self="ToggleModal(false)">
                <div class="modal-body">
                    <div class="px-2 py-1 pb-2 w-full flex items-center justify-between">
                        <h2 class="">
                            Minesweeper Go
                        </h2>
                        <button @click="ToggleModal(false)" class="hover-default rounded-xl p-2">
                            <XMarkIcon class="size-5" />
                        </button>
                    </div>
                    <div class="p-1 px-3 w-full rounded-3xl bg-amber-200/25 prespective-border border-zinc-800">
                        <ul class="menu-vertical">
                            <slot />
                        </ul>
                    </div>
                    <!--TODO: Add Light/Dark Theme & Language select-->
                </div>
            </div>
        </Transition>
    </Teleport>
    <ul class="menu-horizontal">
        <slot />
    </ul>
    <button class="p-2 rounded-2xl hover:bg-black/20 md:hidden" @click="ToggleModal(true)">
        <Bars3Icon class="size-6" />
    </button>
</template>

<style lang="postcss" scoped>
.modal-back {
    @apply md:hidden absolute top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm flex items-center justify-center
}

.modal-body {
    @apply bg-gray-50 border-zinc-950 p-2 pb-2.5 rounded-3xl shadow-2xl shadow-black/60 flex flex-col items-start justify-center w-6/12 min-w-52 max-w-96
}

.menu-vertical {
    @apply py-1.5 divide-y-2 divide-stone-400/20 flex flex-col items-stretch justify-center
}

.menu-horizontal {
    @apply py-1.5 px-4 divide-x-2 divide-stone-400/20 hidden md:flex items-stretch justify-start
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.4s ease-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}


.v-enter-active .modal-body {
    animation: bounce-in 0.4s;
    @apply transition-transform duration-300 delay-100 ease-out
}

.v-leave-active .modal-body {
    animation: bounce-in 0.4s reverse;
    @apply transition-transform duration-300 delay-0 ease-out
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.125);
    }

    100% {
        transform: scale(1);
    }
}
</style>