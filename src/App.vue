<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import HomeMain from "@/components/home/Main.vue";
import { NCard } from 'naive-ui';
</script>

<template>
  <n-card :bordered="false" class="background-img">
    <template #cover>
      <HomeMain />
    </template>
  </n-card>
  <Footer></Footer>
</template>

<style scoped>
.background-img {
  background-image: url(./assets/home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
