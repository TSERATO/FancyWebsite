<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  const scrollToPlugins = (e: Event) => {
    e.preventDefault()
    const target = document.getElementById('plugins')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollLink = document.querySelector('a[href="#plugins"]')
  if (scrollLink) {
    scrollLink.addEventListener('click', scrollToPlugins)
  }
})
</script>

<template>
  <div class="page-wrapper">
    <div class="hero-section">
      <div class="hero-background"></div>
      <div class="hero-content-wrapper">
        <div class="hero-logo">
          <img src="../assets/img/FancyPlugins_1024.png" alt="FancyInnovations Logo" />
        </div>
        <h1 class="hero-title">FancyInnovations</h1>
        <p class="hero-subtitle">A collection of plugins that will make your server look more <b>fancy</b></p>
        <div class="hero-features">
          <span class="feature-tag">Simple</span>
          <span class="feature-tag">Lightweight</span>
          <span class="feature-tag">Fast</span>
        </div>
        <a href="#plugins" class="scroll-indicator">
          <span class="scroll-text">Our Plugins</span>
          <div class="scroll-arrow">↓</div>
        </a>
      </div>
    </div>

    <div class="content-section" id="plugins">
      <div class="plugins-container">
        <h2 class="plugins-title">Our Plugins</h2>

        <div class="game-section">
          <h3 class="game-title minecraft-title">Minecraft</h3>
          <div class="plugins-grid">
            <div class="plugin-card">
              <div class="card-icon">
                <img src="https://raw.githubusercontent.com/FancyInnovations/FancyPlugins/main/docs/src/static/logos-and-banners/fancynpcs-logo.png" alt="FancyNpcs Logo" />
              </div>
              <h3 class="card-title">FancyNpcs</h3>
              <p class="card-description">Create and manage blazingly fast NPCs with the power of packets</p>
              <div class="card-buttons">
                <a href="https://modrinth.com/plugin/fancynpcs/versions" target="_blank" class="btn-download">Download</a>
                <RouterLink to="/FancyNpcs" class="btn-details">View Details</RouterLink>
              </div>
            </div>

            <div class="plugin-card">
              <div class="card-icon">
                <img src="https://raw.githubusercontent.com/FancyInnovations/FancyPlugins/main/docs/src/static/logos-and-banners/fancyholograms-logo.png" alt="FancyHolograms Logo" />
              </div>
              <h3 class="card-title">FancyHolograms</h3>
              <p class="card-description">Create and manage ultra modern holograms with display entities</p>
              <div class="card-buttons">
                <a href="https://modrinth.com/plugin/fancyholograms/versions" target="_blank" class="btn-download">Download</a>
                <RouterLink to="/FancyHolograms" class="btn-details">View Details</RouterLink>
              </div>
            </div>

            <div class="plugin-card">
              <div class="card-icon">
                <img src="https://raw.githubusercontent.com/FancyInnovations/FancyPlugins/main/docs/src/static/logos-and-banners/fancydialogs-logo.png" alt="FancyDialogs Logo" />
              </div>
              <h3 class="card-title">FancyDialogs</h3>
              <p class="card-description">Create immersive interactive dialogs and conversations for players</p>
              <div class="card-buttons">
                <a href="https://modrinth.com/plugin/fancydialogs/versions" target="_blank" class="btn-download">Download</a>
                <RouterLink to="/FancyDialogs" class="btn-details">View Details</RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div class="game-section">
          <h3 class="game-title hytale-title">Hytale</h3>
          <div class="plugins-grid">
            <div class="plugin-card">
              <div class="card-icon">
                <img src="https://raw.githubusercontent.com/FancyInnovations/FancyPlugins/main/docs/src/static/logos-and-banners/fancycore-logo.png" alt="FancyCore Logo" />
              </div>
              <h3 class="card-title">FancyCore</h3>
              <p class="card-description">Coming soon - A powerful core plugin for Hytale servers</p>
              <div class="card-buttons">
                <button class="btn-download btn-disabled" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-wrapper {
  width: 100%;
  min-height: 100vh;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1b2e 0%, #2b2d42 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(141, 153, 174, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(237, 242, 244, 0.05) 0%, transparent 50%);
}

.hero-content-wrapper {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  max-width: 900px;
}

.hero-logo {
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out;
}

.hero-logo img {
  width: 200px;
  height: auto;
  filter: drop-shadow(0 10px 40px rgba(141, 153, 174, 0.4));
}

.hero-title {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 5rem;
  font-weight: 700;
  color: var(--primary-light);
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-subtitle {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.5rem;
  color: var(--gray);
  margin-bottom: 2.5rem;
  font-weight: 400;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-features {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.feature-tag {
  padding: 0.75rem 1.5rem;
  background: rgba(141, 153, 174, 0.1);
  border: 1px solid rgba(141, 153, 174, 0.3);
  border-radius: 50px;
  color: var(--primary-light);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.feature-tag:hover {
  background: rgba(141, 153, 174, 0.2);
  border-color: var(--primary);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 4rem;
  animation: fadeInUp 0.8s ease-out 0.8s both;
  text-decoration: none;
  cursor: pointer;
}

.scroll-text {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 0.9rem;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
}

.scroll-arrow {
  font-size: 2rem;
  color: var(--primary);
  animation: bounce 2s infinite;
  cursor: pointer;
  transition: color 0.3s ease;
}

.scroll-arrow:hover {
  color: var(--primary-light);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.content-section {
  background: var(--background-color);
  padding: 6rem 2rem;
}

.plugins-container {
  max-width: 1200px;
  margin: 0 auto;
}

.plugins-title {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--primary-light);
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: -1px;
}

.game-section {
  margin-bottom: 5rem;
}

.game-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary-light);
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(141, 153, 174, 0.2);
}

.minecraft-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.5);
}

.hytale-title {
  font-family: 'Cinzel', serif;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.plugins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.plugin-card {
  background: var(--background-secondary);
  border: 1px solid rgba(141, 153, 174, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.plugin-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.plugin-card:hover::before {
  transform: scaleX(1);
}

.plugin-card:hover {
  transform: translateY(-8px);
  border-color: rgba(141, 153, 174, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.plugin-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.card-title {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--primary-light);
  margin-bottom: 1rem;
}

.card-description {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.7;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.card-buttons {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.btn-download,
.btn-details {
  flex: 1;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-download {
  background: var(--primary);
  color: var(--background-color);
  border: 2px solid var(--primary);
}

.btn-download:hover {
  background: var(--primary-light);
  border-color: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(141, 153, 174, 0.3);
}

.btn-details {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-details:hover {
  background: rgba(141, 153, 174, 0.1);
  border-color: var(--primary-light);
  color: var(--primary-light);
  transform: translateY(-2px);
}

.btn-disabled {
  background: rgba(141, 153, 174, 0.2);
  color: var(--gray);
  border: 2px solid rgba(141, 153, 174, 0.2);
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-disabled:hover {
  transform: none;
  box-shadow: none;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-logo img {
    width: 150px;
  }

  .plugins-title {
    font-size: 2.5rem;
  }

  .plugins-grid {
    grid-template-columns: 1fr;
  }

  .content-section {
    padding: 4rem 1.5rem;
  }
}
</style>
