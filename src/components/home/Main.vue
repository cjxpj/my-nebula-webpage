<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import {
  NAvatar,
  NIcon,
  NLayoutSider,
  NMenu,
  NLayout,
  NCard,
  NFlex,
  NButton,
} from 'naive-ui'
import { BeerOutline } from '@vicons/ionicons5'
import myimg from '@/assets/myimg.jpg'
import { h, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight' // 官方插件
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';



// 注册高亮插件
marked.use(
  markedHighlight({
    // 高亮函数
    highlight(code: string, lang: string) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
    // 生成的 <code> 上 class 前缀
    langPrefix: 'hljs language-'
  })
)


// 把 .md 当原始文本
const modules = import.meta.glob<string>(
  '/src/doc/*.md',
  { query: '?raw', import: 'default' }
)


const menuOptions: MenuOption[] = Object.keys(modules).map((path) => {
  const name = path.replace('/src/doc/', '').replace('.md', '')
  return {
    label: name,
    key: name,
    href: `/?doc=${encodeURIComponent(name)}`,
  }
})

// 读取文档内容
const content = ref('')

onMounted(async () => {
  try {
    const name = useRoute().query.doc as string
    if (!name) return

    const loader = modules[`/src/doc/${name}.md`]
    if (!loader) return

    const txt = await loader()
    content.value = marked(txt).toString()
  } catch (err) {
    console.error('加载文档失败：', err)  // 关键行
  }
})

// 点击触发后检测跳转
const jump = (option: MenuOption) =>
  'href' in option
    ? h('a', { href: option.href }, option.label as string)
    : (option.label as string)

// 渲染图标
const renderMenuIcon = (option: MenuOption) =>
  option.key === 'sheep-man'
    ? true
    : option.key === 'food'
      ? null
      : h(NIcon, null, { default: () => h(BeerOutline) })
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider bordered class="layout-sider" collapse-mode="width" :collapsed-width="64" :width="240"
      :default-collapsed="true" show-trigger>
      <n-menu :collapsed-width="64" :options="menuOptions" :render-label="jump" :render-icon="renderMenuIcon" />
    </n-layout-sider>

    <n-layout>
      <!-- 有文档时渲染内容 -->
      <div v-if="content" class="layout-doc markdown-body" v-html="content"></div>

      <!-- 无文档时渲染默认占位 -->
      <div v-else class="layout-content">
        <div class="avatar-body">
          <div class="myimg-body">
            <n-avatar round :size="180" :src="myimg" class="myimg" />
          </div>
        </div>
        <n-flex justify="center" class="tips">
          Ciallo～(∠・ω ＜)⌒☆
        </n-flex>

        <n-flex justify="center" class="item">
          <n-button text tag="a" href="https://www.baidu.com" target="_blank" type="primary">
            <n-card hoverable>
              百度
            </n-card>
          </n-button>
          <n-button text tag="a" href="https://www.baidu.com" target="_blank" type="primary">
            <n-card hoverable>
              百度
            </n-card>
          </n-button>
          <n-button text tag="a" href="https://www.baidu.com" target="_blank" type="primary">
            <n-card hoverable>
              百度
            </n-card>
          </n-button>
        </n-flex>
      </div>
    </n-layout>
  </n-layout>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css");


.tips {
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.layout-sider {
  background: linear-gradient(to right, white, pink);
}

.item .n-card {
  margin: 0 50px;
  margin-top: 50px;
  min-width: 186px;
  width: 20%;
  background-color: transparent;
  text-align: center;
}

.layout-doc {
  height: 100vh;
}

.layout-content {
  background-color: pink;
  height: 100vh;
}

.avatar-body {
  display: flex;
  justify-content: center;
  width: 100%;
}

.myimg-body {
  margin-top: 100px;
}

.myimg {
  -webkit-user-drag: none;
  box-shadow: 0 0 20px white;
}

/* 360旋转图片 */
.myimg {
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
