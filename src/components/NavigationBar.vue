<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <div class="nav-item">
      <RouterLink to="/">
        <img src="/src/assets/img/FancyPlugins_1024.png" alt="FancyInnovations" />
      </RouterLink>
    </div>
    <div class="nav-item">
      <RouterLink to="/">
        <h1>FancyInnovations</h1>
      </RouterLink>
    </div>

    <div class="align-right">
      <div class="nav-item">
        <RouterLink to="/FancyNpcs"><p>FancyNpcs</p></RouterLink>
      </div>

      <div class="nav-item">
        <RouterLink to="/FancyHolograms"><p>FancyHolograms</p></RouterLink>
      </div>

      <div class="nav-item">
        <a href="https://github.com/FancyInnovations" target="_blank">
          <img src="/src/assets/img/github.png" alt="GitHub" />
        </a>
      </div>

      <div class="nav-item">
        <a href="https://discord.gg/ZUgYCEJUEx" target="_blank">
          <img src="/src/assets/img/discord.png" alt="Discord" />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  max-height: 60px;
  width: 100%;
  padding: 0;
  background-color: #211d07;
  overflow: hidden;
  display: flex;
}

.nav-item {
  margin: 0 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.align-right {
  margin-left: auto;
  display: flex;
}

img {
  height: 35px;
  margin-top: 7px;
  border-radius: 10px;
}

h1 {
  margin: 0;
  padding: 0;
}

p {
  color: var(--yellow);
  font-size: inherit;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.2s;
}

p:hover {
  background-color: var(--yellow-dark);
}

a {
  color: inherit;
  font-size: inherit;
  text-decoration: none;
}
</style>
