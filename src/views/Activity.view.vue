<script>
export default {
  name: "Activity",
};
</script>

<template>
  <div class="detail-content">
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
              <img
                class="img-sort"
                src="./assets/icon/sort-icon/terbaru.svg"
                alt="icon-terbaru"
              />
              <p>Terbaru</p>
            </li>
            <li class="sort-option">
              <img
                class="img-sort"
                src="./assets/icon/sort-icon/terlama.svg"
                alt="icon-terlama"
              />
              <p>Terlama</p>
            </li>
            <li class="sort-option">
              <img
                class="img-sort"
                src="./assets/icon/sort-icon/A-Z.svg"
                alt="icon-A-Z"
              />
              <p>A-Z</p>
            </li>
            <li class="sort-option">
              <img
                class="img-sort"
                src="./assets/icon/sort-icon/Z-A.svg"
                alt="icon-Z-A"
              />
              <p>Z-A</p>
            </li>
            <li class="sort-option">
              <img
                class="img-sort"
                src="./assets/icon/sort-icon/belum-selesai.svg"
                alt="icon-belum-selesai"
              />
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
    <div class="empty-item">
      <img src="./assets/img/todo-empty-state.svg" alt="image-todo-empty-state" />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
