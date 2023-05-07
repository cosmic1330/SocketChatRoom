<script setup>
import Chart from "./Chart.vue";
import Chat from "./Chat.vue";
import DateTime from "./DateTime.vue";
defineProps({});
</script>

<template>
  <div class="container-fluid">
    <div class="row row-cols-1 mx-3">
      <div class="col">
        <DateTime />
      </div>
      <div class="col">
        <Chart />
      </div>
      <div class="col">
        <Chat />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
