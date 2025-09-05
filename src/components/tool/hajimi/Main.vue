<script setup lang="ts">
import { ref, onMounted } from "vue";
// @ts-ignore
import { initWasm } from "@/utils/loadwasm";
import { NCard, NFlex, NAvatar, NInput } from "naive-ui";
import hajimiBody from "@/assets/images/hajimi-body.png";

const key = "cjxpj";
const text = ref("");
const result = ref("");

let wasm: initWasm;

onMounted(async () => {
  wasm = await initWasm();
});

const doEncrypt = (txt: string) => {
  if (!wasm) return;
  const t = wasm.encrypt(key, txt);
  if (typeof t !== "object") result.value = t;
};

const doDecrypt = (txt: string) => {
  if (!wasm) return;
  const t = wasm.decrypt(key, txt);
  if (typeof t !== "object") text.value = t;
}


// 统一rows
const allRows = (() => {
  // 匹配电脑手机
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  if (isMobile) {
    return {
      minRows: 10,
      maxRows: 10,
    }
  } else {
    return {
      minRows: 20,
      maxRows: 20,
    }
  }
})();
</script>

<template>
  <div class="container">
    <n-flex justify="center" align="center" style="height: 100%;">
      <n-card class="hajimi-card" hoverable title="哈基密曼波~">
        <template #header-extra>
          <n-avatar round :size="48" :src="hajimiBody" />
        </template>
        <n-flex align="center" style="height: 100%;">
          <n-flex justify="space-around" style="width: 100%;">
            <div class="inputtext">
              <n-input placeholder="输入内容" type="textarea" :autosize="allRows" size="small" show-count @input="doEncrypt"
                v-model:value="text" />
            </div>
            <div class="inputtext">
              <n-input placeholder="翻译内容" type="textarea" :autosize="allRows" show-count @input="doDecrypt"
                v-model:value="result" />
            </div>
          </n-flex>
        </n-flex>
      </n-card>
    </n-flex>
  </div>
</template>

<style scoped>
.inputtext {
  width: 40%;
  min-width: 270px;
}

.container {
  height: 100%;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.hajimi-card {
  width: 80%;
  height: 80%;
}
</style>
