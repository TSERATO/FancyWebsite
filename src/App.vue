<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <RouterView />
  </main>
  <Footer/>
</template>

<style scoped>
  main {
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>
