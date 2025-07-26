import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-27',
  plugins: ['~/plugins/ascii-head.client.js'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-svgo'
  ],
  css: ['~/css/main.css'],
  svgo: {
    autoImportPath: false,
    defaultImport: "component",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Paul's Guitar Shop",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
}) 