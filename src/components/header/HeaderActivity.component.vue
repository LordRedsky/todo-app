<script>
export default {
  name: "HeaderActivity",
};
</script>

<template>
  <div class="todo-header">
    <h1 class="new-activity"><i class="fa-solid fa-angle-left"></i> New Activity</h1>

    <div class="dropdown">
      <div>
        <button class="btn-dropdown">
          <i class="fa-solid fa-right-left"></i>
        </button>

        <!-- SORT DROPDOWN -->
        <ul class="sort-dropdown">
          <li class="sort-option">
            <img class="img-sort" src="../assets/img/sort/terbaru.svg" alt="" />
            <p>Terbaru</p>
          </li>
          <li class="sort-option">
            <img class="img-sort" src="../assets/img/sort/terlama.svg" alt="" />
            <p>Terlama</p>
          </li>
          <li class="sort-option">
            <img class="img-sort" src="../assets/img/sort/A-Z.svg" alt="" />
            <p>A-Z</p>
          </li>
          <li class="sort-option">
            <img class="img-sort" src="../assets/img/sort/Z-A.svg" alt="" />
            <p>Z-A</p>
          </li>
          <li class="sort-option">
            <img class="img-sort" src="../assets/img/sort/Belum Selesai.svg" alt="" />
            <p>Belum Selesai</p>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn-add">
      <i class="fa-regular fa-plus"></i>
      Tambah
    </button>
  </div>
</template>

<style scoped>
.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

.todo-header .btn-add {
  background-color: #16abf8;
  width: 159px;
  height: 54px;
  padding: 13px, 21px, 13px, 14px;
  color: #ffffff;
  font-weight: 400;
  font-family: inherit;
  border-radius: 45px;
  gap: 6px;
  font-size: 16px;
  border: none;
}

.todo-header .new-activity {
  margin-right: auto;
}
</style>
