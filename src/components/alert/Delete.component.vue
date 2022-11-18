<template>
  <div class="delete-container" data-cy="delete-container">
    <div class="alert-logo" data-cy="alert-logo">
      <img
        src="../../assets/icon/modal-icon/modal-delete-icon.svg"
        alt="delete-icon"
        data-cy="delete-icon"
      />
    </div>
    <div class="alert-message" data-cy="alert-message">
      <p data-cy="message">
        Apakah anda yakin menghapus <span>activity</span><br />
        <span class="msg-bold">"{{ deletedActivityData.title }}?""</span>
      </p>
    </div>
    <div class="alert-button" data-cy="alert-btn">
      <button
        class="btn btn-cancel"
        data-cy="btn-cancel"
        @click.prevent="closeModalButtonHandler"
      >
        Batal
      </button>
      <button
        class="btn btn-delete"
        data-cy="btn-delete"
        @click.prevent="deleteButtonHandler(deletedActivityData.id)"
      >
        Hapus
      </button>
    </div>
  </div>
</template>

<script>
import useActivityStore from "../../stores/activity";
import { mapActions, mapWritableState } from "pinia";

export default {
  name: "DeleteAlert",
  computed: {
    ...mapWritableState(useActivityStore, ["isOpenModal", "deletedActivityData"]),
  },
  methods: {
    ...mapActions(useActivityStore, ["deleteActivity"]),
    closeModalButtonHandler() {
      this.isOpenModal = !this.isOpenModal;
    },

    deleteButtonHandler(id) {
      this.deleteActivity(id);
    },
  },
};
</script>

<style scoped>
/* DELETE & ALERT */
.delete-container {
  position: absolute;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  width: 490px;
  height: 355px;
  padding: 40px;
  font-size: 18px;

  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.alert-logo {
  width: 63px;
  height: 57px;
}

.alert-message {
  display: flex;
  flex: 3;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.alert-message .msg-bold {
  font-weight: bolder;
}

.alert-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.alert-button .btn-cancel {
  background-color: #f4f4f4;
  color: #4a4a4a;
  font-weight: 600;
}

.alert-button .btn-delete {
  font-weight: 600;
  background-color: #ed4c5c;
}
</style>
