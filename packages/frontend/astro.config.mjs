import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import aws from "astro-sst/lambda";

// https://astro.build/config

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
  site: "http://local.mydomain.com:3000/",
  integrations: [mdx(), sitemap(), tailwind(), solidJs()]
});