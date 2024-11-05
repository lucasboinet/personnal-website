<template>
  <div class="flex flex-col items-center gap-16 max-w-[1048px] mx-auto px-5">
    <h4 class="text-primary font-bold text-4xl" data-aos="fade-up" data-aos-delay="100">Compétences</h4>
    <div class="flex flex-row justify-center items-center gap-2 flex-wrap w-2/3">
      <span 
        v-for="(skill, index) in skills" 
        :key="skill" 
        class="bg-primary whitespace-nowrap bg-opacity-20 text-primary px-2 py-1 text-xs rounded"
        data-aos="fade-up" :data-aos-delay="100 + (50 * index)"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import skills from '~/data/skills'
</script>