<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { NUpload, NButton, type UploadFileInfo, NFlex, NCard } from 'naive-ui'

const file = ref<File | null>(null)
const bwUrl = ref<string>('')   // 黑白图预览地址
const canvas = ref<HTMLCanvasElement | null>(null)

function revokeBWUrl() {
  if (bwUrl.value) {
    URL.revokeObjectURL(bwUrl.value)
    bwUrl.value = ''
  }
}

// naive-ui 的 before-upload 钩子
function onFile({ file: uploadFile }: { file: UploadFileInfo }) {
  const f = uploadFile.file ?? null
  if (f && /^(image\/)(jpeg|png)$/.test(f.type)) {
    file.value = f
    revokeBWUrl() // 清理旧的 URL
    toBW()        // 直接转黑白
  } else {
    alert('只能上传 jpg / png ！')
    return false // 阻止上传
  }
  return false // 阻止默认上传逻辑
}

async function toBW() {
  if (!file.value) return

  // 画原图
  const img = await loadImg(URL.createObjectURL(file.value))
  const cvs = canvas.value!
  const ctx = cvs.getContext('2d')!
  cvs.width = img.naturalWidth
  cvs.height = img.naturalHeight
  ctx.filter = 'grayscale(100%)'
  ctx.drawImage(img, 0, 0)

  // 转 blob → 预览
  cvs.toBlob(b => {
    if (b) {
      revokeBWUrl()  // 替换前清理
      bwUrl.value = URL.createObjectURL(b)
    }
  }, 'image/png')
}

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise(res => {
    const i = new Image()
    i.src = src
    i.onload = () => {
      URL.revokeObjectURL(src) // 用完原图 URL 就释放
      res(i)
    }
  })
}

onBeforeUnmount(() => {
  revokeBWUrl()  // 组件卸载时清理
})
</script>

<template>
  <n-flex justify="center" align="center" class="bg">
    <n-flex justify="center">
      <n-card title="上传彩色图 → 看黑白照" style="max-width:50vh;" hoverable>
        <template #cover>
          <img v-if="bwUrl" :src="bwUrl" style="max-width:100%;" />
        </template>

        <n-upload accept=".jpg,.jpeg,.png" :max="1" :default-upload="false" @before-upload="onFile">
          <n-button>选择图片(JPG/PNG)</n-button>
        </n-upload>

        <canvas ref="canvas" style="display:none"></canvas>
      </n-card>
    </n-flex>
  </n-flex>
</template>

<style scoped>
.bg {
  height: 100%;
  /* 灰色 */
  background-color: #f5f5f5;
}
</style>
