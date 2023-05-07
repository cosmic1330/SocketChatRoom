<script setup>
defineProps();
</script>

<template>
  <div class="d-flex justify-content-end w-100">
    <button class="btn bi bi-bell text-primary"></button>
    <div class="dropdown border-top">
      <a
        href="#"
        class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="24"
          height="24"
          class="rounded-circle"
        />
      </a>
      <ul
        class="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser3"
        style=""
      >
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
