<script setup>
const props = defineProps({ message: String, time: String });
</script>

<template>
  <div class="d-flex mb-2 flex-row-reverse" style="font-size: 14px; color: white;">
    <!-- 訊息 -->
    <div class="d-flex flex-column ms-2 me-1">
      <div class="socket_message">
        {{ props.message }}
      </div>
    </div>
    <!-- 發送時間 -->
    <div class="message_time">{{ props.time }}</div>
  </div>
</template>

<style scoped>
.socket_message {
  white-space: pre;
  background-color: rgb(200, 241, 243);
  border-radius: 7px;
  padding: 6px 10px;
  position: relative;
  min-height: 33px;
  color: black;
}

.socket_message::before {
  content: "";
  position: absolute;
  top: 7px;
  border: 10px solid rgb(200, 241, 243);
  right: -12px;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.message_time {
  font-size: 12px;
  margin-top: auto;
}
</style>
