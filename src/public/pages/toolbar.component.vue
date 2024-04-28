<script setup>

</script>

<template>
  <!--<pv-toolbar class="bg-primary" fixed>-->
  <div id="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/argentina">Argentina</router-link>
    <router-link to="/ecuador">Ecuador</router-link>
    <router-link :to="{name:'peru'}">Peru</router-link>

    <router-link :to="{name:'login'}">Log In</router-link>
  </div>
  <!--</pv-toolbar>-->
</template>

<style scoped>

</style>