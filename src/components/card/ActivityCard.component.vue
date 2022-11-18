<script>
import { mapActions, mapWritableState } from "pinia";
import useActivityStore from "../../stores/activity";

export default {
  name: "ActivityCard",
  computed: {
    ...mapWritableState(useActivityStore, ["activities"]),
  },
  methods: {
    ...mapActions(useActivityStore, ["getActivity"]),
    moveToActivity(id) {
      this.$router.push({ path: `/activity/${id}` });
      this.activities = [];
    },
    
  },

  created() {
    this.getActivity();
  },
};
</script>

<template>
  <div class="dashboard-content" data-cy="dashboard-content">
    <!-- Has Activity -->
    <div class="activity-container" data-cy="activity-container">
      <div
        class="activity-card-container"
        data-cy="activity-card-container"
        v-for="activity in activities"
        :key="activity.id"
        @click.prevent="moveToActivity(activity.id)"
      >
        <h2>{{ activity.title }}</h2>
        <div class="footer-card" data-cy="footer-card">
          <span>{{ activity.updated_at }}</span>
          <i class="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.activity-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* background-color: red; */
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
