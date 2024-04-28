<script setup>

//import PvButton from "../../main.js";
//import PvButton from "../../main.js";
</script>

<template>
  <div class="home">
    <h1>Estamos en Peru!!!</h1>
  </div>
<div>
  <pv-button type="submit" @click="$router.push({ path: '/peru/ciudades' })">Veamos las Ciudades</pv-button>
</div>
  <div class="anidado">
    <router-view/>
  </div>

</template>

<style scoped>

</style>