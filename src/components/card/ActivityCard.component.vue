<script>
import { mapActions, mapWritableState } from "pinia";
import useActivityStore from "../../stores/activity";
import DeleteComponentVue from "../alert/Delete.component.vue";
import AlertComponentVue from "../alert/Alert.component.vue";

export default {
  name: "ActivityCard",
  computed: {
    ...mapWritableState(useActivityStore, [
      "activities",
      "isOpenModal",
      "deletedActivityData",
      "isAlertConfirm",
    ]),
  },
  methods: {
    ...mapActions(useActivityStore, [
      "getActivity",
      "deleteActivity",
      "getDetailActivity",
    ]),
    moveToActivity(id) {
      this.$router.push({ path: `/activity/${id}` });
      this.getDetailActivity(id);
    },
    deleteActivityHandler(id) {
      this.deleteActivity(id);
    },

    showModalDeleteHandler(input) {
      this.isOpenModal = true;
      this.deletedActivityData = input;
    },
  },
  created() {
    this.getActivity();
  },
  components: { DeleteComponentVue, AlertComponentVue },
};
</script>

<template>
  <div class="dashboard-content" data-cy="dashboard-content">
    <!-- Has Activity -->
    <DeleteComponentVue v-if="isOpenModal" />
    <AlertComponentVue v-if="isAlertConfirm" />
    <div class="activity-container" data-cy="activity-container">
      <div
        class="activity-card-container"
        data-cy="activity-card-container"
        v-for="activity in activities"
        :key="activity.id"
      >
        <h2 @click.prevent="moveToActivity(activity.id)">{{ activity.title }}</h2>
        <div class="footer-card" data-cy="footer-card">
          <span @click.prevent="moveToActivity(activity.id)">{{
            activity.created_at
          }}</span>
          <div @click.prevent="showModalDeleteHandler(activity)">
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.activity-container {
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* background-color: red; */
  gap: 15px;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* justify-content: flex-start; */
}

.activity-card-container {
  max-width: 100%;
  /* width: 235px; */
  height: 235px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 10px 27px;
}

.activity-card-container .footer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
