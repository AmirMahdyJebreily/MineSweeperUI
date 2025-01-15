<script setup lang="ts">
import { useRoute } from 'vue-router';
import { reactive } from 'vue';

class Options {
    cols: number = 0;
    rows: number = 0;
    bombs: number = 0
}

const route = useRoute()
const options: Options = reactive<Options>(JSON.parse(atob(route.params.playcode as string)))
console.log(options);

</script>
<template>
    Play in {{ options.cols }} × {{ options.rows }} board with {{ options.bombs }} bombs
</template>