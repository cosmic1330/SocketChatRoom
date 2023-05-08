<script setup>
import { inject, ref } from "vue";

const gloableStore = inject("GloableStore");
const { state, modifyRoom } = gloableStore;

// handle
const onClick = (e) => modifyRoom(e.target.textContent.trim());

// Time
const currentTime = ref("");
const updateCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  currentTime.value = `${hours}:${minutes}`;
};
updateCurrentTime();
setInterval(updateCurrentTime, 60000);

// Date
const formattedDate = ref("");

// 根据星期几索引获取星期几名称
const getWeekdayName = (weekdayIndex) => {
  const weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekdayNames[weekdayIndex];
};

// 根据月份索引获取月份名称
const getMonthName = (monthIndex) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthIndex];
};
const generateFormattedDate = () => {
  const now = new Date();
  const month = getMonthName(now.getMonth());
  const day = now.getDate();
  const weekday = getWeekdayName(now.getDay());
  formattedDate.value = `${month} ${day}, ${weekday}`;
};

// 初始化时生成格式化的文本
generateFormattedDate();
</script>

<template>
  <div
    class="d-flex justify-content-between flex-lg-row flex-column align-items-center my-4"
  >
    <div class="col">
      <span class="fs-3 me-2">{{ currentTime }}</span>
      <span class="fs-6 text-secondary opacity-50">{{ formattedDate }}</span>
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
          {{ state.room }}
        </button>
        <div class="dropdown-menu" aria-labelledby="triggerId">
          <button
            @click="onClick"
            :class="{ 'dropdown-item': true, active: state.room === 'TAIEX' }"
          >
            TAIEX
          </button>
          <button
            @click="onClick"
            :class="{ 'dropdown-item': true, active: state.room === 'BTC' }"
          >
            BTC
          </button>
          <button @click="onClick" class="dropdown-item disabled">DJI</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
