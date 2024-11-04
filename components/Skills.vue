<template>
  <div class="flex flex-col items-center gap-16 max-w-[1048px] mx-auto">
    <h4 class="text-primary font-bold text-4xl">Compétences</h4>
    <div class="flex flex-row justify-center items-center gap-2">
      <span v-for="skill in skills" :key="skill" class="bg-primary bg-opacity-20 text-primary px-2 py-1 text-xs rounded">{{ skill }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import skills from '~/data/skills'
</script>