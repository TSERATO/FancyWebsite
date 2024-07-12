<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div class="inner-footer">
      <div>
        <img src="../assets/img/FancyPlugins_1024.png" width="50"/>
      </div>

      <div>
        <p><RouterLink to="FancyNpcs">FancyNpcs</RouterLink></p>
        <p><RouterLink to="FancyHolograms">FancyHolograms</RouterLink></p>
      </div>

      <div>
        <a href="https://github.com/FancyMcPlugins"><p>GitHub</p></a>
        <a href="https://discord.gg/ZUgYCEJUEx"><p>Discord</p></a>
      </div>

<!--      <div>-->
<!--        <p><RouterLink to="Impressum">Impressum</RouterLink></p>-->
<!--        <p><RouterLink to="Datenschutz">Datenschutz</RouterLink></p>-->
<!--      </div>-->

      <div>
        <p>&copy; 2021-2024 FancyPlugins</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer{
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  margin: 0;
  background-color: var(--gray-dark);
  color: var(--gray);
}

.inner-footer{
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.inner-footer div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

a, p{
  color: inherit;
  text-decoration: none;
  margin: 5px 0;
}
</style>