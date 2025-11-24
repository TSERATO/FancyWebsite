<script setup lang="ts">

</script>

<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-column">
        <h4>Navigation</h4>
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="footer-column">
        <h4>Resources</h4>
        <a href="https://github.com/FancyInnovations" target="_blank">GitHub</a>
        <a href="https://discord.gg/ZUgYCEJUEx" target="_blank">Discord</a>
        <a href="https://docs.fancyinnovations.com" target="_blank">Documentation</a>
      </div>
      <div class="footer-column">
        <h4>Legal</h4>
        <RouterLink to="/Impressum">Impressum</RouterLink>
        <RouterLink to="/Datenschutz">Datenschutz</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 3rem 2rem;
  border-top: 1px solid rgba(141, 153, 174, 0.15);
}

.footer-content {
  display: flex;
  justify-content: center;
  gap: 20rem;
  flex-wrap: wrap;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  text-align: center;
}

.footer-column h4 {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-light);
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: var(--gray);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  width: fit-content;
}

.footer-column a:hover {
  color: var(--primary-light);
  transform: translateX(4px);
}
</style>