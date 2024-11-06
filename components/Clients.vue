<template>
    <div id="clients" class="flex flex-col sm:flex-row items-center justify-center w-full gap-20 overflow-x-auto px-4" data-aos="fade-up">
        <img v-for="client in clients" :key="client" :src="client" class="max-h-10 [filter:brightness(0)_invert(1)] opacity-60" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import skyloudLogo from '~/assets/img/skyloud_logo.png'
import tokatabLogo from '~/assets/img/tokatab_logo.png'


const clients = ref([
    skyloudLogo,
    tokatabLogo
])
</script>

<style scoped>
#clients {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
#clients::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
</style>