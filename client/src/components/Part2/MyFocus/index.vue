<script setup>
import Card from "./Card.vue";
defineProps({});
</script>

<template>
  <div class="container-fluid">
    <div class="d-flex align-items-center justify-content-between">
      <p class="h3">My Focus</p>
      <a href="#">All Focus</a>
    </div>
    <div class="row row-cols-3 row-cols-lg-2 row-cols-xl-3 g-3">
      <div class="col">
        <Card />
      </div>
      <div class="col">
        <Card />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
