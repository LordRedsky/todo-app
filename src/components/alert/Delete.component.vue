<template>
  <div class="delete-container">
    <div class="alert-logo">
      <img src="./assets/icon/modal-icon/modal-delete-icon.svg" alt="delete-icon" />
    </div>
    <div class="alert-message">
      <p>
        Apakah anda yakin menghapus <span>activity</span><br />
        <span class="msg-bold">"Meeting dengan Client"?</span>
      </p>
    </div>
    <div class="alert-button">
      <button class="btn btn-cancel">Batal</button>
      <button class="btn btn-delete">Hapus</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delete",
};
</script>

<style scoped>
/* DELETE & ALERT */
.delete-container {
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
