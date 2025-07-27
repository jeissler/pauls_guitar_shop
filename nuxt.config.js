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
  image: {
    provider: (process.env.NODE_ENV === 'production' || process.env.NETLIFY || process.env.NETLIFY_DEV) ? 'netlify' : 'ipx',
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },
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