<template>
  <div class="flex flex-row items-center justify-between p-6 sticky top-0 w-full z-40 bg-gradient-to-t from-[#00161600] to-[#001616]">
    <img :src="logo" class="size-10">

    <ul class="hidden md:flex flex-row gap-12 list-none items-center text-white-alt">
      <li><a href="#clients">Contact</a></li>
      <li><a href="#contact">Expertise</a></li>
      <li><a href="#projets">Projets</a></li>
    </ul>

    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ234fMyOY_JaOSjYoFVPK8gGHv5esLaX_6TrvRf8B1bq_uDhBoy4Su1eBXMDhZcZMXenB2-_E_9" target="_blank">
      <button type="button" class="bg-primary text-white-alt rounded-lg px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium">Planifier un appel</button>
    </a>
  </div>
</template>

<script lang="ts" setup>
import logo from "~/assets/img/logo.svg"
</script>