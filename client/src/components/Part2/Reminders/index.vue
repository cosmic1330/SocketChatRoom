<script setup>
import Item from "./Item.vue";
defineProps({});
</script>

<template>
  <div class="container-fluid">
    <div class="d-flex align-items-center justify-content-between">
      <p class="h3">Reminders</p>
      <a href="#">View All</a>
    </div>
    <div class="row row-cols-1 g-3">
      <div class="col">
        <Item />
      </div>
      <div class="col">
        <Item />
      </div>
      <div class="col">
        <Item />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
