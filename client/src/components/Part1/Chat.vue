<script setup>
defineProps({});
</script>

<template>
  <p class="h2 my-3">Chat Room <span class="text-primary text-opacity-50">BTC</span></p>

  <div
    class="overflow-auto mb-2 p-3 rounded"
    style="height: calc(100vh - 540px)"
  >
    <div class="p">...</div>
    <div class="p">...</div>
    <div class="p">...</div>
    <div class="p">...</div>
    <div class="p">...</div>
    <div class="p">...</div>
    <div class="p">...</div>
    <div class="p">...</div>
    <div class="p">...</div>
  </div>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username with two button addons"
    />
    <button class="btn btn-outline-secondary" type="button">
      <i class="bi bi-emoji-smile"></i>
    </button>
    <button class="btn btn-outline-secondary" type="button">
      <i class="bi bi-send"></i>
    </button>
  </div>
</template>

<style scoped></style>
