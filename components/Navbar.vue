<template>
  <div class="flex flex-row items-center justify-between p-6 sticky top-0 w-full z-40 bg-gradient-to-t from-[#00161600] to-[#001616]">
    <img :src="logo" class="size-10">

    <ul class="hidden md:flex flex-row gap-12 list-none items-center text-white-alt">
      <li><a href="#contact">Contact</a></li>
      <li><a href="#expertise">Expertise</a></li>
      <li><a href="#projets">Projets</a></li>
    </ul>

    <a href="#contact">
      <button type="button" class="bg-primary text-white-alt rounded-lg px-8 py-3 text-xs font-medium">Reserver un appel</button>
    </a>
  </div>
</template>

<script lang="ts" setup>
import logo from "~/assets/img/logo.svg"
</script>