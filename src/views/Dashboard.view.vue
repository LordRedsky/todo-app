<script>
export default {
  name: "Dashboard",
};
</script>

<template>
  <div class="todo-header">
    <h1>Activity</h1>
    <button class="btn-add">
      <i class="fa-regular fa-plus"></i>
      Tambah
    </button>
  </div>
  <br />
  <div class="dashboard-content">
    <!-- Empty -->
    <div class="empty-content">
      <img src="./assets/img/activity-empty-state.svg" alt="image-activity-empty-state" />
    </div>
    <br />
    <!-- Has Activity -->
    <div class="activity-container">
      <div class="activity-card-container">
        <h2>Bertemu Dokter</h2>
        <div class="footer-card">
          <span>3 Oktober 2021</span>
          <i class="fa-regular fa-trash-can"></i>
        </div>
      </div>
      <div class="activity-card-container">
        <h2>Bertemu Dokter</h2>
        <div class="footer-card">
          <span>3 Oktober 2021</span>
          <i class="fa-regular fa-trash-can"></i>
        </div>
      </div>
      <div class="activity-card-container">
        <h2>Bertemu Dokter</h2>
        <div class="footer-card">
          <span>3 Oktober 2021</span>
          <i class="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
