<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import ActivityCardComponent from "../components/card/ActivityCard.component.vue";
import useActivityStore from "../stores/activity";

export default {
  name: "Dashboard",
  components: { ActivityCardComponent },
  methods: {
    ...mapActions(useActivityStore, ["getActivity", "createActivity"]),
    createNewActivityHandler() {
      this.createActivity();
    },
  },
  computed: {
    ...mapWritableState(useActivityStore, ["activities"]),
  },

  Created() {
    this.activities = [];
    this.getActivity();
  },
};
</script>

<template>
  <div class="container">
    <div class="todo-header">
      <h1>Activity</h1>
      <button class="btn btn-add" @click.prevent="createNewActivityHandler">
        <i class="fa-regular fa-plus"></i>
        Tambah
      </button>
    </div>
    <!-- IF ACTIVITY EMPTY -->
    <div class="empty-content" v-if="this.activities.length === 0">
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
<style scoped></style>
