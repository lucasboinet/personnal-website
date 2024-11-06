<template>
  <div 
    v-if="open" 
    class="fixed top-0 left-0 inset-0 bg-black bg-opacity-0 flex justify-center items-center z-50 p-10 overflow-auto"
    :class="{ 'animate-background': open }"
    @click.self="$emit('close')"
  >
    <div class="bg-secondary absolute top-20 p-5 rounded-xl" :class="{ 'animate-modal': open }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['close']);
defineProps<{
  open: boolean
}>();
</script>

<style scoped>
.animate-modal {
  opacity: 0;
  transform: scale(1);
  animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}

.animate-background {
  animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}

@keyframes fadeIn {
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,.7);
  }
}

@keyframes scaleUp {
  0% {
    transform:scale(.8) translateY(1000px);
    opacity: 0;
  }
  100% {
    transform:scale(1) translateY(0px);
    opacity: 1;
  }
}
</style>