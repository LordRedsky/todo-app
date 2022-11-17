<template>
  <div class="dashboard-content">
    <!-- Has Activity -->
    <div class="activity-container" @click.prevent="moveToActivity">
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

<script>
export default {
  name: "ActivityCard",
  methods: {
    moveToActivity() {
      this.$router.push({ path: "/activity" });
    },
  },
};
</script>

<style scoped>
.activity-container {
  display: flex;
  gap: 15px;
}

.activity-card-container {
  width: 235px;
  height: 235px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 27px;
}

.activity-card-container .footer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
