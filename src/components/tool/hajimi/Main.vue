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

function doEncrypt(txt: string) {
  if (!wasm) return;
  result.value = wasm.encrypt(key, txt);
}

function doDecrypt(txt: string) {
  if (!wasm) return;
  text.value = wasm.decrypt(key, txt);
}
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
              <n-input placeholder="输入内容" type="textarea" :autosize="{
                minRows: 25,
                maxRows: 25
              }" @input="doEncrypt" v-model:value="text" />
            </div>
            <div class="inputtext">
              <n-input placeholder="翻译内容" type="textarea" :autosize="{
                minRows: 25,
                maxRows: 25
              }" @input="doDecrypt" v-model:value="result" />
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

.inputtext n-input {
  height: 100%;
}

.container {
  height: 100vh;
  background-color: #f0f2f5;
}

.hajimi-card {
  width: 80%;
  height: 80%;
}
</style>
