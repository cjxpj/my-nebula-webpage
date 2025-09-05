<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import {
  NAvatar,
  NIcon,
  NLayoutSider,
  NMenu,
  NLayout,
  NFlex,
  NButton,
} from 'naive-ui'
import { BeerOutline } from '@vicons/ionicons5'
import myimg from '@/assets/images/myimg.jpg'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import hajimi from '@/assets/images/hajimi.jpg'
import hbz from '@/assets/images/hbz.png'
const menuOptions: MenuOption[] = [
  {
    label: "哈基密语言",
    key: "hajimi",
    img: "hajimi",
  },
  {
    label: "黑白照",
    key: "reset-image",
    img: "hbz",
  }
];

// 点击触发后检测跳转,不存在使用router
const jump = (option: MenuOption) =>
  'href' in option
    ? h('a', { href: option.href }, option.label as string)
    : h(RouterLink, { to: option.key as string }, () => option.label)

// 渲染图标
const renderMenuIcon = (option: MenuOption) =>
  option.img === "hajimi"
    ? h(NAvatar, { round: true, size: "small", src: hajimi })
    : option.img === "hbz"
      ? h(NAvatar, { round: true, size: "small", src: hbz })
      : h(NIcon, null, { default: () => h(BeerOutline) })
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider bordered class="layout-sider" collapse-mode="width" :collapsed-width="64" :width="240"
      :default-collapsed="true" show-trigger>
      <n-menu :collapsed-width="64" :options="menuOptions" :render-label="jump" :render-icon="renderMenuIcon" />
    </n-layout-sider>

    <n-layout>
      <div class="layout-content">
        <div class="avatar-body">
          <div class="myimg-body">
            <n-avatar round :size="180" :src="myimg" class="myimg" />
          </div>
        </div>
        <n-flex justify="center" class="tips">
          Ciallo～(∠・ω ＜)⌒<span class="stars">☆</span>
        </n-flex>

        <n-flex justify="center" class="item">
          <n-button round color="#ff7a45" tag="a" href="https://www.baidu.com" target="_blank">
            百度
          </n-button>
        </n-flex>
      </div>
    </n-layout>
  </n-layout>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css");

/* 上下浮动 */
.stars {
  animation: stars 3s linear infinite;
}

@keyframes stars {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

.tips {
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.layout-sider {
  background: linear-gradient(to right, white, pink);
}

.item .n-button {
  margin: 0 50px;
  margin-top: 50px;
  min-width: 186px;
  height: 60px;
  width: 15%;
  text-align: center;
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
