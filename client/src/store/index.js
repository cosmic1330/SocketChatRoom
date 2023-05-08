import { reactive, readonly } from "vue";

const state = reactive({
  room: "BTC",
});

const modifyRoom = (roomName) => (state.room = roomName);

export default {
  state: readonly(state),
  modifyRoom,
};
