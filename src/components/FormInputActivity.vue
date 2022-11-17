<template>
  <div class="form-container">
    <div class="form-header">
      <h2>Tambah List Item</h2>
      <!-- <div> -->
      <i class="fa-regular fa-plus"></i>
      <!-- </div> -->
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

          <!-- <ul class="options">
                            <li class="option selected">
                                <i style="color: #ED4C5C;" class="fa-solid fa-circle"></i>
                                <span>Very Hight</span>
                            </li>
                            <li class="option">
                                <i style="color: #f8a541;" class="fa-solid fa-circle"></i>
                                <span>Hight</span>
                            </li>
                            <li class="option">
                                <i style="color: #00a790;" class="fa-solid fa-circle"></i>
                                Medium
                            </li>
                            <li class="option">
                                <i style="color: #428bc1;" class="fa-solid fa-circle"></i>
                                Low
                            </li>
                            <li class="option">
                                <i style="color: #8942c1;" class="fa-solid fa-circle"></i>
                                Very Low
                            </li>
                        </ul> -->
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
  name: "InputActivityForm",
};
</script>

<style lang="scss" scoped></style>
