<script setup lang="ts">
</script>

<template>
  <div class="plugin-page">
    <div class="plugin-hero">
      <div class="back-button-container">
        <RouterLink to="/" class="back-button">
          <span class="back-arrow">←</span> Back to Home
        </RouterLink>
      </div>
      <div class="hero-content">
        <div class="plugin-logo">
          <img src="https://raw.githubusercontent.com/FancyInnovations/FancyPlugins/main/docs/src/static/logos-and-banners/fancyholograms-logo.png" alt="FancyHolograms Logo" />
        </div>
        <h1 class="plugin-title">FancyHolograms</h1>
        <p class="plugin-tagline">Create and manage ultra modern holograms with display entities</p>

        <div class="badges">
          <img src="https://img.shields.io/github/v/release/FancyMcPlugins/FancyHolograms?style=flat-square" alt="Release"/>
          <img src="https://badges.spiget.org/resources/downloads/spigotmc-orange-108694.svg" alt="Spigot Downloads"/>
          <img src="https://img.shields.io/modrinth/dt/fancyholograms?color=00AF5C&label=modrinth&style=flat&logo=modrinth" alt="Modrinth Downloads"/>
          <img src="https://img.shields.io/github/downloads/FancyMcPlugins/FancyHolograms/total?logo=GitHub&style=flat-square" alt="GitHub Downloads"/>
        </div>

        <div class="action-buttons">
          <a href="https://modrinth.com/plugin/fancyholograms/versions" target="_blank" class="btn btn-primary">Download</a>
          <a href="https://docs.fancyinnovations.com/fancyholograms/" target="_blank" class="btn btn-secondary">Documentation</a>
        </div>
      </div>
    </div>

    <div class="plugin-content">
      <section class="content-section">
        <h2>Description</h2>
        <p>FancyHolograms is a simple and lightweight hologram plugin for minecraft servers using the display entities. It is using packets and therefore it is blazingly fast.</p>
        <p>The plugin is only supported for 1.19.4 - latest version. It is highly recommended to use Paper or a fork of it - Folia is also supported.</p>
        <p>PlaceholderAPI and MiniPlaceholders are supported.</p>
      </section>

      <section class="content-section">
        <h2>Features</h2>
        <p>With FancyHolograms you can create fancy holograms that take advantage of the display entities. You are able to create text, item and block holograms.</p>

        <h3>Properties you can modify:</h3>
        <ul class="feature-list">
          <li>Scale</li>
          <li>Billboard</li>
          <li>Rotation (yaw & pitch)</li>
          <li>Background color</li>
          <li>Text shadow</li>
          <li>Text alignment</li>
          <li>Placeholders in the text</li>
          <li>And more...</li>
        </ul>

        <p>The holograms are directly sent to the player via packets, which makes FancyHologram very fast and flexible.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.plugin-page {
  width: 100%;
  min-height: 100vh;
}

.back-button-container {
  position: absolute;
  top: 2rem;
  left: 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(141, 153, 174, 0.1);
  border-color: var(--primary-light);
  color: var(--primary-light);
  transform: translateX(-3px);
}

.back-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.back-button:hover .back-arrow {
  transform: translateX(-3px);
}

.plugin-hero {
  background: linear-gradient(135deg, var(--background-secondary) 0%, var(--background-color) 100%);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.plugin-logo {
  margin-bottom: 2rem;
}

.plugin-logo img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(141, 153, 174, 0.3));
}

.plugin-title {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: var(--primary-light);
  margin: 0 0 1rem 0;
  letter-spacing: -1px;
}

.plugin-tagline {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.5rem;
  color: var(--gray);
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
}

.badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.badges img {
  height: 22px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: nowrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid;
  white-space: nowrap;
}

.btn-primary {
  background: var(--primary);
  color: var(--background-color);
  border-color: var(--primary);
}

.btn-primary:hover {
  background: var(--primary-light);
  border-color: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(141, 153, 174, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--primary);
  border-color: var(--primary);
}

.btn-secondary:hover {
  background: rgba(141, 153, 174, 0.1);
  border-color: var(--primary-light);
  color: var(--primary-light);
  transform: translateY(-2px);
}

.plugin-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.content-section {
  margin-bottom: 4rem;
}

.content-section h2 {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-light);
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.5px;
}

.content-section h3 {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-light);
  margin: 2rem 0 1rem 0;
}

.content-section p {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.1rem;
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.feature-list li {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.1rem;
  color: var(--gray);
  padding: 0.75rem 0 0.75rem 2rem;
  position: relative;
  line-height: 1.6;
}

.feature-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .plugin-hero {
    padding: 4rem 1.5rem;
  }

  .plugin-title {
    font-size: 2.5rem;
  }

  .plugin-tagline {
    font-size: 1.25rem;
  }

  .plugin-logo img {
    width: 100px;
    height: 100px;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .plugin-content {
    padding: 3rem 1.5rem;
  }

  .content-section h2 {
    font-size: 2rem;
  }

  .back-button {
    padding: 0.75rem;
    font-size: 0;
    justify-content: center;
    align-items: center;
  }

  .back-arrow {
    font-size: 1.5rem;
  }
}
</style>
