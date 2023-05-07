<script setup>
import MyFocus from "./MyFocus/index.vue";
import Reminders from "./Reminders/index.vue";
import Status from "./Status.vue";
defineProps({});
</script>

<template>
  <div class="container">
    <div class="row row-cols-1">
      <div class="col">
        <Status />
      </div>
      <div class="col">
        <MyFocus />
      </div>
      <div class="col mt-3">
        <Reminders />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
