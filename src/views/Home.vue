<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import HomeMain from "@/components/home/Main.vue";
import { NCard } from 'naive-ui';
</script>

<template>

  <n-card :bordered="false">
    <template #cover>
      <HomeMain />
    </template>
  </n-card>
  <Footer></Footer>
</template>
