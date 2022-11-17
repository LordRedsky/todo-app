<template>
  <div class="form-container">
    <div class="form-header">
      <h2>Tambah List Item</h2>
      <i class="fa-regular fa-plus"></i>
    </div>
    <div class="form-body">
      <div class="form-input-name">
        <span>nama list item</span>
        <input type="text" placeholder="Tambahkan nama list item" />
      </div>
      <div class="form-input-priority">
        <span class="title">priority</span>
        <div class="select-menu">
          <div class="select-btn">
            <span>Pilih priority</span>
            <i class="fa-sharp fa-solid fa-chevron-down"></i>
          </div>

          <!-- Dropdown -->
        </div>
      </div>
    </div>
    <div class="form-footer">
      <button class="btn">Simpan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style lang="scss" scoped></style>
