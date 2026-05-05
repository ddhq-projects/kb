import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";

const isProd = process.env.NODE_ENV === 'production';

const SITE_URL = process.env.CNAME
  ? `https://${process.env.CNAME}`
  : "http://localhost:3000";

const BASE = process.env.CNAME ? "/" : (isProd ? "/kb-ddpa" : "/");

export default defineConfig({
  site: SITE_URL,
  base: BASE,

  integrations: [
    starlight({
      title: "База знаний DDPA",
      description: "Практическая база знаний по сервисам для бизнеса и личной продуктивности: AI-инструменты, автоматизация, управление задачами, коммуникации и SaaS-сервисы.",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            href: "/kb/favicon.png",
          },
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
          label: "Личная продуктивность",
          autogenerate: { directory: "productivity" },
        },
        {
          label: "AI-инструменты",
          autogenerate: { directory: "ai" },
        },
        {
          label: "Автоматизация",
          autogenerate: { directory: "automation" },
        },
        {
          label: "Коммуникации",
          autogenerate: { directory: "communication" },
        },
        {
          label: "SaaS-сервисы",
          autogenerate: { directory: "saas" },
        },
        {
          label: "Бизнес-процессы",
          autogenerate: { directory: "business" },
        },
        {
          label: "Dev-инструменты",
          autogenerate: { directory: "dev" },
        },
        {
          label: "FAQ и сравнения",
          autogenerate: { directory: "faq" },
        },
        {
          label: "Шпаргалки и чеклисты",
          autogenerate: { directory: "cheatsheet" },
        },
      ],
    }),
  ],
});
