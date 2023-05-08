<script setup>
const props = defineProps({ message: String, time: String, nickName: String });
</script>

<template>
  <div class="d-flex mb-2" style="font-size: 14px; color: white">
    <!-- 人像 -->
    <div
      class="rounded-circle bg-success me-2 mt-1 overflow-hidden"
      style="width: 45px; height: 45px"
    >
      <img
        src="https://api.harpersbazaar.com.hk/var/site/storage/images/_aliases/img_748_w/celebrity/celebrity-life/about-takeshi-kaneshiro/01/1872949-2-chi-HK/01.jpg"
        class="w-100"
      />
    </div>
    <!-- 人名訊息 -->
    <div class="d-flex flex-column me-2 ms-1">
      <span>{{ props.nickName }}</span>
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
  background-color: #ccc;
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
  border: 10px solid #ccc;
  left: -12px;
  border-top: 5px solid transparent;
  border-left: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.message_time {
  font-size: 12px;
  margin-top: auto;
}
</style>
