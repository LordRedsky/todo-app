<template>
  <div class="alert-container" data-cy="alert-container">
    <div class="alert" data-cy="alert">
      <img
        src="../../assets/icon/modal-icon/modal-information-icon.svg"
        alt="information-icon"
        data-cy="information-icon"
      />
      <p data-cy="alert-message">Activity berhasil dihapus</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
};
</script>

<style scoped>
/* ALERT */
.alert-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 490px;
  height: 58px;
  padding: 19px 39px;

  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.alert {
  display: flex;
  gap: 10px;
}
</style>
