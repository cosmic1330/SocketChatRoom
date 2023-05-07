<script setup>
import Part1 from "./components/Part1/index.vue";
import Part2 from "./components/Part2/index.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="d-flex">
    <SideBar />
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
        <div class="col">
          <Part1 />
        </div>
        <div class="col bg-light">
          <Part2 />
        </div>
      </div>
    </div>
  </div>
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
