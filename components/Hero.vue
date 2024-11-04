<template>
    <div class="flex flex-row items-start justify-center gap-20 w-full">
        <div class="flex flex-col justify-start items-start gap-3">
            <div class="flex flex-row items-center gap-2 bg-primary bg-opacity-[.08] text-primary rounded-lg px-3 py-[10px] mb-2">
                <CheckCircleIcon class="size-4" />
                <span>Une vraie expertise web au service de vos projets !</span>
            </div>
            <h1 class="text-white-alt text-5xl font-bold mb-10">Lucas Boinet, Développeur full-stack freelance</h1>
            <button type="button" class="bg-primary text-white-alt rounded-lg px-12 py-3 text-xs font-medium">Me contacter</button>
        </div>

        <div class="relative">
            <img :src="heroImg" />
            <div class="bg-white p-6 flex flex-col gap-6 rounded-b-2xl rounded-tl-2xl absolute -left-full transform translate-x-14 -translate-y-36 w-[514px] h-[180px]">
                <div class="flex flex-row items-start justify-between">
                    <div class="flex flex-col">
                        <span class="font-bold">Lucas Boinet</span>
                        <span class="text-primary">Développeur Web Full-Stack</span>
                    </div>

                    <span class="text-primary text-sm bg-primary bg-opacity-20 px-3 py-1 rounded-full">Disponible</span>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-row items-center gap-2">
                        <CheckCircleIcon class="size-5 text-primary" />
                        <span class="text-secondary leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>

                    <div class="flex flex-row items-center gap-2">
                        <CheckCircleIcon class="size-5 text-primary" />
                        <span class="text-secondary leading-none">Lorem ipsum dolor sit amet.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import heroImg from '~/assets/img/hero_img.svg'
</script>