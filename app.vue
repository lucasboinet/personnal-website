<template>
  <div>
    <NuxtRouteAnnouncer />
    <BreakpointsDebugger />
    <div class="max-w-[1400px] mx-auto flex flex-col relative">
      <Navbar />
      <Hero class="mt-6 sm:mt-24 xl:mb-16" />
      <Clients class="my-28 sm:my-36 xl:my-40" />
      <Contact />
      <WebDevelopment class="my-28 sm:my-36 xl:my-40" />
      <Skills />
      <div class="my-40">
        <Projects />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import 'lenis/dist/lenis.css'
import '~/assets/css/styles.css'
import Lenis from 'lenis'
import { onMounted } from 'vue';

useHead({
  title: 'Lucas Boinet - Développeur full-stack freelance',
  meta: [
    { name: 'description', content: "Développeur full-stack freelance à Lyon, création de sites web, développement d'applications, et solutions sur mesure." }
  ],

})

onMounted(() => {
  new Lenis({ 
    lerp: 0.1,
    wheelMultiplier: 1.6,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
    autoRaf: true 
  });
})
</script>