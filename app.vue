<template>
  <div>
    <NuxtRouteAnnouncer />
    <BreakpointsDebugger />
    <div class="max-w-[1400px] mx-auto flex flex-col">
      <Hero class="my-16" />
      <Clients class="my-40" />
      <Contact />
      <WebDevelopment class="my-28" />
      <Skills />
      <Projects class="my-28" />
    </div>
  </div>
</template>

<script setup>
import '~/assets/css/styles.css'
</script>
