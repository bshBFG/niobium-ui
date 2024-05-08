import { presetUno } from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '../src/module',
    '@nuxt/fonts',
  ],

  fonts: {
    families: [
      { name: 'DM Sans', provider: 'google' },
    ],
  },

  css: [
    '~/assets/main.css',
  ],

  unocss: {
    theme: {
      fontFamily: {
        sans: ['DM Sans', presetUno().theme?.fontFamily?.sans],
      },
    },
  },
})
