<script setup lang="ts">
</script>

<template>
      <div class="flex">
        <div>
          <img src="../assets/img/FancyPlugins_1024.png" width="500" />
        </div>

        <div>
          <h1>FancyInnovations</h1>
          <p class="color-yellow-dark">FancyInnovations is a collection of plugins that will make your server look more <b>fancy</b>.</p>
          <p class="color-yellow-dark">Our focus is to create <b>simple</b>, <b>lightweight</b> and <b>fast</b> plugins.</p>

          <hr>

          <h2>FancyNpcs</h2>
          <p class="color-yellow-dark">Create and manage blazingly fast NPCs with the power of packets.</p>

          <h2>FancyHolograms</h2>
          <p class="color-yellow-dark">Create and manage ultra modern holograms with display entities.</p>
        </div>
      </div>
</template>

<style scoped>
.flex{
  display: flex;
  margin: 10px;
  width: 100%;
  min-width: 100%;
}

@media(max-width: 1050px){
  .flex{
    display: block;
  }
}

.flex div{
  width: calc(100%/2);
}

img {
  margin-top: 2%;
}

h1, h2 {
  font-family: 'Ubuntu';
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 3em;
}

h2{
  font-size: 2em;
  color: var(--yellow);
}

p {
  font-size: 1.3em;
  margin-top: 5px;
}

hr{
  color: var(--yellow);
  margin: 30px 0;
  opacity: 20%;
}

</style>
