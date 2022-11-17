<script>
import ActivityCardComponent from "../components/card/ActivityCard.component.vue";

export default {
  name: "Dashboard",
  components: { ActivityCardComponent },
};
</script>

<template>
  <div class="container">
    <div class="todo-header">
      <h1>Activity</h1>
      <button class="btn-add">
        <i class="fa-regular fa-plus"></i>
        Tambah
      </button>
    </div>
    <!-- IF ACTIVITY EMPTY -->
    <div class="empty-content">
      <img
        src="../assets/img/activity-empty-state.svg"
        alt="image-activity-empty-state"
      />
    </div>
    <br />
    <!-- CARD ACTIVITY -->
    <ActivityCardComponent />
  </div>
</template>
<style scoped>
.dashboard-container {
  padding: 10px 220px;
}
</style>
