<template>
    <div id="projets" class="flex flex-col items-center gap-16 max-w-[1048px] mx-auto px-10">
        <h4 class="text-primary font-bold text-4xl" data-aos="fade-up" data-aos-delay="100">Mes projets</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div 
                v-for="(project, index) in projects" :key="project.name" 
                class="w-full aspect-square md:aspect-auto md:w-[300px] md:h-[300px] overflow-hidden rounded-2xl relative cursor-pointer"
                data-aos="fade-up" :data-aos-delay="100 + (50 * index)"
                @click="() => handleOpenModal(project)"
            >
                <img :src="project.images[0]" class="object-cover h-full w-full" />
                <div class="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-b from-[#012c2b00] to-[#012c2bcb]">
                    <span class="text-2xl font-bold text-white-alt">{{ project.name }}</span>
                </div>
            </div>
        </div>
    </div>
    <Modal :open="openModal" @close="handleCloseModal" >
        <div v-if="selectedProject" class="flex flex-col justify-start items-start gap-3 max-w-5xl">
            <Carousel v-bind="carouselConfig" class="rounded-lg overflow-hidden">
                <Slide v-for="image in selectedProject?.images" :key="image">
                    <div class="carousel__item">
                        <img :src="image" />
                    </div>
                </Slide>

                <template #addons="{ slidesCount }">
                    <Navigation v-if="slidesCount > 1" />
                </template>
            </Carousel>

            <span class="text-2xl text-primary font-bold">{{ selectedProject?.name }}</span>

            <p class="break-words text-white-alt mt-3 mb-6" v-html="selectedProject?.description"></p>

            <div class="flex flex-row justify-center items-center gap-2 flex-wrap">
                <span v-for="techno in selectedProject?.technos" :key="techno" class="bg-primary whitespace-nowrap bg-opacity-20 text-primary px-2 py-1 text-xs rounded">{{ techno }}</span>
            </div>
        </div>
    </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import projects, { type Project } from '~/data/projects'

const openModal = ref(false);
const selectedProject = ref<Project | undefined>(undefined);

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
};

function handleOpenModal(project: Project) {
    openModal.value = true;
    selectedProject.value = project;
    document.body.style.overflow = 'hidden';
}

function handleCloseModal() {
    openModal.value = false;
    selectedProject.value = undefined;
    document.body.style.overflow = 'auto';
}
</script>