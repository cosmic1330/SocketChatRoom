<script setup>
defineProps({});
</script>

<template>
  <div
    class="d-flex justify-content-between flex-lg-row flex-column align-items-center my-4"
  >
    <div class="col">
      <span class="fs-3 me-2">20:32</span>
      <span class="fs-6 text-secondary opacity-50">June 23, Money</span>
    </div>
    <div class="col text-lg-end">
      <div class="dropdown open">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          BTC
        </button>
        <div class="dropdown-menu" aria-labelledby="triggerId">
          <button class="dropdown-item">TAIEX</button>
          <button class="dropdown-item active">BTC</button>
          <button class="dropdown-item disabled">DJI</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
