<script setup>
defineProps();
</script>

<template>
  <div class="container">
    <div class="d-flex row bg-white rounded align-items-center">
      <div class="col-2 p-3">
        <div
          class="bg-warning rounded-circle text-center align-middle"
          style="width: 50px; height: 50px; line-height: 50px"
        >
          M 3
        </div>
      </div>
      <div class="col-8 d-flex justify-content-between">
        <span class="fs-6 fw-bold">20:32</span>
        <span class="fs-6 text-secondary opacity-50">June 23, Money</span>
      </div>
      <div class="col-2 text-center">
        <button
          type="button"
          class="btn rounded-circle"
          style="width: 42px; height: 42px"
        >
          <i class="bi bi-three-dots"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
