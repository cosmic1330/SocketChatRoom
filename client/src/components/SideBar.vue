<script setup>
import VueLogo from "../assets/vue.svg";
defineProps({});
</script>

<template>
  <div
    class="d-flex flex-column border-end text-center justify-content-between align-items-center"
    style="width: 4.5rem; min-height: 100vh"
  >
    <h1><img :src="VueLogo" alt="Vue logo" /></h1>
    <button type="button" class="btn mb-3 fs-5">
      <i class="bi bi-box-arrow-left "></i>
    </button>
  </div>
</template>

<style scoped></style>
