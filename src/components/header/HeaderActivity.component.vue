<script>
export default {
  name: "HeaderActivity",
};
</script>

<template>
  <div class="todo-header" data-cy="todo-header">
    <h1 class="new-activity"><i class="fa-solid fa-angle-left"></i> New Activity</h1>

    <div class="dropdown">
      <div>
        <button class="btn-dropdown">
          <i class="fa-solid fa-right-left"></i>
        </button>

        <!-- SORT DROPDOWN -->
        <ul class="sort-dropdown" data-cy="sort-dropdown">
          <li class="sort-option" data-cy="sort-option" >
            <img class="img-sort" src="../assets/img/sort/terbaru.svg" alt="" />
            <p>Terbaru</p>
          </li>
          <li class="sort-option" data-cy="sort-option">
            <img class="img-sort" src="../assets/img/sort/terlama.svg" alt="" />
            <p>Terlama</p>
          </li>
          <li class="sort-option" data-cy="sort-option">
            <img class="img-sort" src="../assets/img/sort/A-Z.svg" alt="" />
            <p>A-Z</p>
          </li>
          <li class="sort-option" data-cy="sort-option">
            <img class="img-sort" src="../assets/img/sort/Z-A.svg" alt="" />
            <p>Z-A</p>
          </li>
          <li class="sort-option" data-cy="sort-option">
            <img class="img-sort" src="../assets/img/sort/Belum Selesai.svg" alt="" />
            <p>Belum Selesai</p>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn-add" data-cy="btn-add">
      <i class="fa-regular fa-plus"></i>
      Tambah
    </button>
  </div>
</template>

<style scoped>

</style>
