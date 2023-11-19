<script setup lang="ts">
  const props = defineProps(["name", "title_url"])
</script>

<template>
  <img class="title-img" :src="props.title_url" :alt="props.name">
</template>

<style scoped>
.title-img{
  width: 70%;
  margin-bottom: 100px;
  filter: sepia(81%) saturate(389%) hue-rotate(144deg);
}
</style>