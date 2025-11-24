<script setup lang="ts">

</script>

<template>
  <div class="legal-page">
    <div class="content-container">
      <h1>Impressum</h1>
      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>Oliver Schl&uuml;ter<br />
        &#91;Stra&szlig;e&#93;<br />
        &#91;Postleitzahl&#93; &#91;Ort&#93;</p>
      <h2>Kontakt</h2>
      <p>Telefon: &#91;Telefonnummer&#93;<br />
        E-Mail: mail@schlueter-oliver.de</p>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--background-color);
  padding: 4rem 2rem;
}

.content-container {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-light);
  margin-bottom: 2rem;
  letter-spacing: -1px;
}

h2 {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--primary-light);
  margin: 2rem 0 1rem 0;
}

p {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  font-size: 1.1rem;
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .legal-page {
    padding: 3rem 1.5rem;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>