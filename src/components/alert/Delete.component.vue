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

<style lang="scss" scoped></style>
