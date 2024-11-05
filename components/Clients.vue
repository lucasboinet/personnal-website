<template>
    <div id="clients" class="flex flex-row items-center justify-center w-full gap-20" data-aos="fade-up">
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