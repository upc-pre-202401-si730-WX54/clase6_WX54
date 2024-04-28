<script setup>

</script>

<template>
  <div class="home">
    <h1>Estamos en Login!!!</h1>
  </div>
  <div>
    <pv-button type="submit" @click="$router.push({ path: '/invoice' })">Vamos a Invoice</pv-button>
  </div>
</template>

<style scoped>

</style>