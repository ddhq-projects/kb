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
      plugins: [starlightAutoSidebar()],
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
        // Yandex.Metrika counter
        {
          tag: "script",
          attrs: { type: "text/javascript" },
          content: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(52081728, 'init', {webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `,
        },
        {
          tag: "noscript",
          content: '<div><img src="https://mc.yandex.ru/watch/52081728" style="position:absolute; left:-9999px;" alt="" /></div>',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/ddhq-projects/kb/blob/main',
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ddhq-projects/kb",
        },
        {
          icon: "external",
          label: "Сайт DDPA",
          href: "https://ddpa.ru/",
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
