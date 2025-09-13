import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://rent.fortbendlinc.org',
  // trailingSlash: 'always',
  integrations: [react(), icon(), mdx(), sitemap()
    ,
    // partytown({
    //   config: {
    //     lib: '/_partytown/',
    //     forward: ['dataLayer.push'],
    //   }
    // })
  ],
  image: {
    domains: ["astro.build"],
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  i18n: {
    locales: ["es", "en"],
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
        prefixDefaultLocale: false
    }
  }
});