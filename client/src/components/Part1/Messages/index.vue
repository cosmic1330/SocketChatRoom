<script setup>
import MyMessage from "./MyMessage.vue";
import Message from "./OtherMessage.vue";

const props = defineProps({
  socket: {
    type: Object,
    required: true,
  },
  allMessage: Array,
});

props.socket.on("message", function ({ nickName, message }) {
  console.log({ nickName, message });
  props.allMessage.push({ from: "user", nickName, message, time: "下午 2:01" });
});

props.socket.on("userBroadcast", function ({ msg, nickName }) {
  console.log({ nickName, msg });
  props.allMessage.push({
    from: "broadcast",
    nickName,
    message: msg,
    time: "下午 2:01",
  });
});

props.socket.on("systemBroadcast", function (msg) {
  console.log(msg);
  props.allMessage.push({
    from: "system",
    message: msg,
    time: "下午 2:01",
  });
});

props.socket.on("join", function (msg) {
  console.log(msg);
  props.allMessage.push({ from: "join", message: msg, time: "下午 2:01" });
});

props.socket.on("leave", function (msg) {
  console.log(msg);
  props.allMessage.push({
    from: "leave",
    message: msg,
    time: "下午 2:01",
  });
});
</script>

<template>
  <div v-for="item in allMessage" :key="item.id">
    <Message
      v-if="item.from === 'user'"
      :nickName="item.nickName"
      :message="item.message"
      :time="item.time"
    />
    <MyMessage
      v-else-if="item.from === 'me'"
      :message="item.message"
      :time="item.time"
    />
  </div>
</template>

<style scoped></style>
