<script>
import { mapWritableState } from "pinia";
import useFormInputStore from "../../stores/formInput";

export default {
  name: "Modal",
  computed: {
    ...mapWritableState(useFormInputStore, ["isOpen"]),
  },
  methods: {
    closeFormInputHandler() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <div class="form-container">
    <div class="form-header">
      <h2>Tambah List Item</h2>
      <i class="fa-regular fa-plus" @click.prevent="closeFormInputHandler"></i>
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

<style scoped>
/* FORM */
.form-container {
  position: absolute;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #ffffff;
  width: 830px;
  height: 403px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.form-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  border-bottom: 1px solid #e5e5e5;
}

.form-header i {
  rotate: 45deg;
}

.form-body {
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 38px 43px 23px 28px;
  /* justify-content: space-around; */
  gap: 26px;
}

.form-input-name {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 25px;
  text-transform: uppercase;
}

.form-input-name input {
  width: 759px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #16abf8;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
}

.form-input-priority {
  display: flex;
  flex-direction: column;
}

.form-input-priority .title {
  text-transform: uppercase;
}

.form-input-priority select {
  width: 205px;
  height: 52px;

  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 40px;
  border-top: 1px solid #e5e5e5;
}
</style>
