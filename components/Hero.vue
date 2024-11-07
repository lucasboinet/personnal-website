<template>
    <div class="flex flex-col lg:flex-row items-start justify-center gap-20 w-full px-5 sm:px-10 md:px-20">
        <div class="flex flex-col justify-start items-start gap-3 lg:w-[55%]" data-aos="fade-up" data-aos-delay="300">
            <div class="flex flex-row items-center gap-2 bg-primary bg-opacity-[.08] text-primary rounded-lg px-3 py-[10px]">
                <CheckCircleIcon class="size-4" />
                <span>Une vraie expertise web au service de vos projets !</span>
            </div>
            <h1 class="text-white-alt text-5xl font-bold mb-10 leading-[80px]">Lucas Boinet, Développeur full-stack freelance</h1>
            <a href="#clients">
                <button type="button" class="bg-primary text-white-alt rounded-lg px-12 py-3 text-xs font-medium">Me contacter</button>
            </a>
        </div>

        <div class="relative hidden lg:block w-[45%]">
            <div class="relative">
                <img data-aos="fade-up" data-aos-delay="500" :src="vueLogo" class="absolute z-30 top-1/2 -left-6 floating-1" />
                <img data-aos="fade-up" data-aos-delay="700" :src="tailwindLogo" class="absolute z-30 top-[35%] left-[35%] floating-1" />
                <img data-aos="fade-up" data-aos-delay="1100" :src="reactLogo" class="absolute z-30 -top-6 left-[30%] floating-2" />
                <img data-aos="fade-up" data-aos-delay="900" :src="typescriptLogo" class="absolute z-30 top-24 left-[67%] floating-2" />
                <img data-aos="fade-up" data-aos-delay="300" :src="nodeLogo" class="absolute z-30 -bottom-6 left-[55%] floating-1" />
                <img data-aos="fade-up" :src="heroImg" />
            </div>
            <div data-aos="fade-up" data-aos-delay="1000" class="bg-white p-6 flex-col gap-6 rounded-b-2xl rounded-tl-2xl absolute -left-[70%] hidden xl:flex xl:translate-x-28 xl:top-[80%] xl:w-[514px] xl:h-[180px] z-30">
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
                        <span class="text-secondary leading-none">Master Expert Informatique et Systèmes d'Informations.</span>
                    </div>

                    <div class="flex flex-row items-center gap-2">
                        <CheckCircleIcon class="size-5 text-primary" />
                        <span class="text-secondary leading-none">Mes compétences au service de vos projets.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import heroImg from '~/assets/img/hero_img.svg'
import reactLogo from '~/assets/img/react_logo.svg'
import tailwindLogo from '~/assets/img/tailwind_logo.svg'
import typescriptLogo from '~/assets/img/typescript_logo.svg'
import vueLogo from '~/assets/img/vue_logo.svg'
import nodeLogo from '~/assets/img/node_logo.svg'
</script>

<style scoped>
.floating-1 {
    animation: float 3s ease-in-out infinite;
}

.floating-2 {
    animation: float 3s ease-in-out 0.7s infinite;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>