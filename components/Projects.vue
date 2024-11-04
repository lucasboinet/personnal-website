<template>
    <div class="flex flex-col items-center gap-16 max-w-[1048px] mx-auto">
        <h4 class="text-primary font-bold text-4xl">Mes projets</h4>
        <div class="grid grid-cols-3 gap-8">
            <div 
                v-for="project in projects" :key="project.name" 
                class="w-[300px] h-[300px] overflow-hidden rounded-2xl relative"
            >
                <img :src="project.image" class="object-cover h-full w-full" />
                <div class="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-b from-[#012c2b00] to-[#012c2bcb]">
                    <span class="text-2xl font-bold text-white-alt">{{ project.name }}</span>
                    <!-- <p class="text-primary">{{ project.description }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import projects from '~/data/projects'
</script>