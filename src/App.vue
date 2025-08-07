<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <div id="app">
    <router-link to="/login">Login</router-link>
    <router-link to="/signUp">Sign Up</router-link>
    <router-link to="/todos">Todos</router-link>


    <router-view />
  </div>


</template>

<style scoped></style>
