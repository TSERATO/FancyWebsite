<script setup lang="ts">
import PluginTemplate from "@/components/PluginTemplate.vue";
import Sidebar from "@/components/Sidebar.vue";

</script>

<template>
  <PluginTemplate name="FancyHolograms"/>

  <div class="center-img">
    <img src="https://img.shields.io/github/v/release/FancyMcPlugins/FancyHolograms?style=flat-square"/>
    <img src="https://badges.spiget.org/resources/downloads/spigotmc-orange-108694.svg"/>
    <img src="https://img.shields.io/modrinth/dt/fancyholograms?color=00AF5C&label=modrinth&style=flat&logo=modrinth"/>
    <img src="https://img.shields.io/github/downloads/FancyMcPlugins/FancyHolograms/total?logo=GitHub&style=flat-square"/>
  </div>

  <h2>Description</h2>

  <p>FancyHolograms is a simple and lightweight hologram plugin for minecraft servers using the display entities.<br>It is using packets and therefore it is blazingly fast.</p>
  <p>The plugin is only supported for 1.19.4 - latest version.<br>It is highly recommended to use Paper or a fork of it - Folia is also supported.</p>
  <p>PlaceholderAPI and MiniPlaceholders are supported.</p>

  <RouterLink :to="'/FancyHolograms/download/'"><button class="download">Download</button></RouterLink>
  <a class="download" href="https://fancyplugins.de/docs/fancyholograms.html" target="_blank">Documentation</a>

  <h2>Features</h2>

  <p>With FancyHolograms you can create fancy holograms that take advantage of the display entities. You are able to create text, item and block holograms.</p>
  <p>Properties you can modify:</p>
  <ul>
    <li>scale</li>
    <li>billoard</li>
    <li>rotation (yaw & pitch)</li>
    <li>background color</li>
    <li>text shadow</li>
    <li>text alignment</li>
    <li>placeholders in the text</li>
    <li>and more ...</li>
  </ul>

  <p>The holograms are directly sent to the player via packets, which makes FancyHologram very fast and flexible.</p>
</template>

<style scoped>
.center-img{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
}

.center-img img {
  margin: 0 10px;
}

.download{
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--yellow);
  border-radius: 5px;
  background-color: var(--yellow-dark);
  padding: 5px 10px;
  margin: 15px 10px;

  color: var(--yellow-light);
  font-weight: bold;
  font-size: 20px;
}
</style>