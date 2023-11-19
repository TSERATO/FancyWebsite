<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  main {
    width: calc(100% - 30px);
    padding: 15px;
  }
</style>
