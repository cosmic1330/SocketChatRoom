<script setup>
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import { inject, reactive, ref, watch } from "vue";
import Messages from "./Messages/index.vue";

const gloableStore = inject("GloableStore");
const { state } = gloableStore;
// socket
const fieldMessage = ref("");
const socket = io("ws://localhost:4000");
socket.emit("joinRoom", { room: state.room, nickName: "VueUser" });
// record message
const allMessage = reactive([]);

watch(
  () => state.room,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    socket.emit("leaveRoom", { room: oldValue, nickName: "VueUser" });
    socket.emit("joinRoom", { room: newValue, nickName: "VueUser" });
  }
);

function sendMessage() {
  socket.emit("messageRoom", {
    room: state.room,
    nickName: "VueUser",
    message: fieldMessage.value,
  });
  allMessage.push({
    from: "me",
    message: fieldMessage.value,
    time: "下午 2:01",
  });
  fieldMessage.value = "";
}
</script>

<template>
  <p class="h2 my-3">
    Chat Room <span class="text-primary text-opacity-50">{{ state.room }}</span>
  </p>
  <div
    class="overflow-auto mb-2 p-3 rounded bg-dark"
    style="height: calc(100vh - 450px)"
  >
    <Messages :socket="socket" :allMessage="allMessage" />
  </div>
  <div class="input-group">
    <textarea
      v-model="fieldMessage"
      placeholder="Enter your message"
      class="form-control"
      aria-label="With textarea"
    ></textarea>
    <button class="btn btn-outline-secondary" type="button">
      <i class="bi bi-emoji-smile"></i>
    </button>
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="sendMessage"
    >
      <i class="bi bi-send"></i>
    </button>
  </div>
</template>

<style scoped></style>
