import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@kevinmarrec/nuxt-pwa'
      ],
    pwa: {
        icon: {
            source: "assets/images/AirNumberIcon.png",
            maskablePadding: 0
        },
        meta: {
            mobileAppIOS: true,
            name: "AirNumber",
            theme_color: "#437DC4"
        },
        manifest: {
            name: 'AirNumber',
          }
    }
})
