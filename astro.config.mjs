import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";
import { remarkStripMdLinks } from "./src/remark-strip-md-links.mjs";

const isProd = process.env.NODE_ENV === 'production';

const SITE_URL = process.env.CNAME
  ? `https://${process.env.CNAME}`
  : "http://localhost:3000";

const BASE = process.env.CNAME ? "/" : (isProd ? "/kb-ddpa" : "/");

export default defineConfig({
  site: SITE_URL,
  base: BASE,

  markdown: {
    remarkPlugins: [remarkStripMdLinks],
  },

  integrations: [
    starlight({
      title: "База знаний DDPA",
      description: "Практическая база знаний по сервисам для бизнеса и личной продуктивности: AI-инструменты, автоматизация, управление задачами, коммуникации и SaaS-сервисы.",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/svg+xml",
            href: "/kb/icon.svg",
          },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/ddhq-projects/kb/tree/main',
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ddhq-projects/kb",
        },
      ],
      locales: {
        root: {
          label: "Русский",
          lang: "ru",
        },
      },
      sidebar: [
        {
          label: "AI-инструменты",
          autogenerate: { directory: "ai" },
        },
        {
          label: "Бизнес",
          autogenerate: { directory: "business" },
        },
        {
          label: "Лайфстайл",
          autogenerate: { directory: "lifestyle" },
        },
        {
          label: "Госуслуги",
          autogenerate: { directory: "gov" },
        },
        {
          label: "IT",
          autogenerate: { directory: "it" },
        },
      ],
    }),
  ],
});
