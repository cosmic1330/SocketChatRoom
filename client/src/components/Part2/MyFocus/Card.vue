<script setup>
defineProps({});
</script>

<template>
  <div class="card border-0">
    <div class="card-img-top px-3 pt-3">
      <img
        class="w-100 rounded"
        src="https://picsum.photos/300/150?random=1"
        alt="card image"
      />
    </div>
    <div class="card-body">
      <span class="fs-6 text-secondary opacity-50">台泥</span>
      <p class="h5 mt-2 mb-3">Card title</p>
      <div class="d-flex justify-content-between my-2">
        <span class="fw-bold" style="font-size: 14px">15%</span>
        <span class="fw-bold text-secondary opacity-50" style="font-size: 14px"
          >2/10 income</span
        >
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="progressbar"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        style="height: 3px"
      >
        <div class="progress-bar" style="width: 25%"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
