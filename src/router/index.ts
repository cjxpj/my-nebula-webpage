// src/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import faviconHajimi from '@/assets/images/favicon-hajimi.ico';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/hajimi',
    name: 'hajimi',
    component: () => import('@/views/tool/hajimi.vue'),
    meta: {
      title: '哈基密翻译器',
      description: '哈基米翻译器，一个能将普通文本加密为哈基米的工具，让别人听不懂你在说什么同时，可以分享数据。',
      keywords: '哈基密,哈基米加密器,哈基密曼波,哈基米语',
      icon: faviconHajimi,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/* ========== 运行时更新 SEO & favicon ========== */
router.afterEach((to) => {
  const { title, description, keywords, icon } = to.meta;

  // 1. 标题
  if (title) document.title = title as string;

  // 2. description & keywords
  updateMeta('description', description as string);
  updateMeta('keywords', keywords as string);

  // 3. favicon
  const faviconUrl = (icon as string) || '/favicon.ico';
  let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = faviconUrl;
});

/* 工具：创建或更新 <meta name="..."> */
function updateMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content || '';
}

export default router;
