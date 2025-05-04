<script setup lang="ts">
import PluginTemplate from "@/components/PluginTemplate.vue";
import Sidebar from "@/components/Sidebar.vue";

</script>

<template>
  <PluginTemplate name="FancyNpcs"/>

  <div class="center-img">
    <img src="https://img.shields.io/github/v/release/FancyMcPlugins/FancyNpcs?style=flat-square"/>
    <img src="https://badges.spiget.org/resources/downloads/spigotmc-orange-107306.svg"/>
    <img src="https://img.shields.io/modrinth/dt/fancynpcs?color=00AF5C&label=modrinth&style=flat&logo=modrinth"/>
    <img src="https://img.shields.io/github/downloads/FancyMcPlugins/FancyNpcs/total?logo=GitHub&style=flat-square"/>
  </div>

  <h2>Description</h2>

  <p>FancyNpcs is a simple and lightweight npc plugin for minecraft servers.<br>It is using packets and therefore it is blazingly fast.</p>
  <p>The plugin is only supported for 1.19.4 - latest version.<br>It is highly recommended to use Paper or a fork of it - Folia is also supported.</p>

  <a class="download" href="https://modrinth.com/plugin/fancynpcs/versions" target="_blank">Download</a>
  <a class="download" href="https://docs.fancyinnovations.com/fancynpcs/" target="_blank">Documentation</a>

  <h2>Features</h2>

  <p>With FancyNpcs you can create NPCs that look like real players. You can edit a bunch of properties like the display name or skin.</p>
  <p>All properties:</p>
  <ul>
    <li>display name</li>
    <li>skin (username or url)</li>
    <li>entity type (cow, pig, blaze etc.)</li>
    <li>equipment (e.g. holding something in the hand)</li>
    <li>glowing (in all colors)</li>
    <li>and many more properties that are entity specific</li>
  </ul>

  <p>You can also define some actions that will be executed when a player interacts with the npc:</p>
  <ul>
    <li>message: sends a simple message to the player</li>
    <li>player command: forces the player to execute a command</li>
    <li>server command: executes a command in the console</li>
  </ul>

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