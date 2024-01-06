<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main>
    <RouterView />
  </main>

  <Footer/>
</template>

<style scoped>
  main {
    min-height: 100vh;
    width: 60%;
    padding: 50px 15px 15px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
