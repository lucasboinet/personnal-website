<template>
    <div class="flex flex-col" data-aos="fade-up" data-aos-delay="50">
        <div class="bg-secondary p-20 w-full rounded-t-xl flex flex-col gap-10 lg:flex-row items-start justify-between">
            <div class="flex flex-col gap-2">
                <img :src="footerLogo" class="size-10" />
                <span class="mb-5 text-white-alt font-bold text-2xl">Lucas Boinet</span>

                <div class="flex flex-col gap-1">
                    <span class="text-sm text-gray-400">Email</span>
                    <span class="text-white-alt">lucasboinet.pro@gmail.com</span>
                </div>
            </div>

            <span class="block lg:hidden w-full h-[1px] bg-white-alt bg-opacity-30"></span>

            <div class="flex flex-col items-end gap-6 w-full lg:max-w-96">
                <span class="font-bold text-2xl text-white-alt w-full text-center lg:text-right">Contactez-moi sans attendre pour parler de votre projet</span>

                <a href="#contact" class="mx-auto lg:mx-0 alig">
                    <button class="bg-primary text-white-alt rounded-lg px-12 py-3 text-xs font-medium">Contact</button>
                </a>
            </div>
        </div>

        <div class="bg-primary bg-opacity-70 text-background-dark flex flex-col md:flex-row justify-between items-center px-20 py-5 text-sm">
            <span>© {{ new Date().getFullYear() }} Lucas Boinet, All rights reserved.</span>

            <a href="#" class="hover:underline">Conditions générales de vente</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import footerLogo from "~/assets/img/logo.svg"
</script>