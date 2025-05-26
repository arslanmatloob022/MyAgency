// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Codesphere Studios - where innovation meets excellence.",
      meta: [
        {
          name: "description",
          content: "Codesphere Studios - where innovation meets excellence.",
        },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
        {
          property: "og:site_name",
          content: "Codesphere Studios - where innovation meets excellence.",
        },
        { property: "twitter:card", content: "summary" },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
      ],
      script: [],
    },
  },
  css: [
    "~/assets/css/all.min.css",
    "~/assets/css/animate.css",
    "~/assets/css/icomon.css",
    "~/assets/css/meanmenu.css",
    "~/assets/css/nice-select.css",
    "~/assets/scss/main.scss",
  ],
  plugins: [
    {
      src: "~/plugins/bootstrap.client.js",
      mode: "client",
    },
    {
      src: "~/plugins/wow.js",
      mode: "client",
    },
  ],
  modules: ["nuxt-swiper", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
