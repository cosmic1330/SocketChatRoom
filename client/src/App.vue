<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"
      >Email address</label
    >
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label"
      >Example textarea</label
    >
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
  
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
