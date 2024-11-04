<template>
    <div 
        v-for="bp in breakpoints" 
        :key="bp" 
        :class="`${breakpointClasses[bp]} fixed ${positionClasses} z-50 flex items-center justify-center rounded-lg bg-gray-800 p-2 font-mono text-xs text-white`"
    >
      {{ bp }}
    </div>
</template>
  
  <script setup>
    const positionClasses = 'bottom-1 left-1';
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    const breakpointClasses = {
        xs: 'block sm:hidden',
        sm: 'hidden sm:block md:hidden',
        md: 'hidden md:block lg:hidden',
        lg: 'hidden lg:block xl:hidden',
        xl: 'hidden xl:block 2xl:hidden',
        '2xl': 'hidden 2xl:block',
    };
  </script>