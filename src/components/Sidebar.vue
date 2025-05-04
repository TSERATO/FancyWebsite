<script setup lang="ts">
const props = defineProps(["plugin"])
</script>

<template>
  <div class="sidebar">
    <div class="bg"></div>
    <ul>
      <li><a :href="'https://docs.fancyinnovations.com/'+props.plugin.toLowerCase()" target="_blank">Docs</a></li>
      <li><a :href="'https://modrinth.com/plugin/'+props.plugin+'/versions'" target="_blank">Download</a></li>
      <hr>
      <li><a :href="'https://github.com/FancyInnovations/' + plugin" target="_blank">GitHub</a></li>
      <li><a href="https://discord.gg/ZUgYCEJUEx" target="_blank">Discord</a></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar{
  position: fixed;
  top: 50%;
  left: 15px;
  z-index: 5;
  transform: translateY(-50%);
  padding: 17px;
  list-style: none;
}

.sidebar .bg{
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  background-color: var(--yellow);
  filter: opacity(15%);
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.sidebar ul{
  text-transform: uppercase;
  font-weight: 600;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

.sidebar li{
  margin: 5px 0;
  text-align: center;
}

.sidebar a, .sidebar p{
  font-size: 14px;
  color: var(--foreground-color);
  text-decoration: none;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 10px;
  transition: all ease-in-out .2s;
  cursor: pointer;
  margin: 0;
}

.sidebar a:hover{
  color: var(--yellow);
}

.sidebar hr{
  margin-top: 10px;
  margin-bottom: 10px;
  width: 70%;
  color: var(--yellow);
}
</style>