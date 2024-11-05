// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt', 'nuxt-aos'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'background-dark': '#001616',
            primary: '#11CB66',
            secondary: '#012C2B',
            'white-alt': '#E4FFE7',
          }
        }
      }
    }
  }
})