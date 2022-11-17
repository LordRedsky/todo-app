<template>
  <div class="list-items">
    <div class="item">
      <!-- <i class="fa-regular fa-square"></i> -->
      <i class="fa-solid fa-square-check check"></i>
      <div class="detail-item">
        <i style="color: #f8a541" class="fa-solid fa-circle"></i>
        <span class="check">Telur Ayam </span>
        <i class="fa-solid fa-pencil"></i>
      </div>
      <i class="fa-regular fa-trash-can"></i>
    </div>
    <div class="item">
      <i class="fa-regular fa-square"></i>
      <!-- <i class="fa-solid fa-square-check"></i> -->
      <div class="detail-item">
        <i style="color: #ed4c5c" class="fa-solid fa-circle"></i>
        <span>Beras 2 karung</span>
        <i class="fa-solid fa-pencil"></i>
      </div>
      <i class="fa-regular fa-trash-can"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
};
</script>

<style lang="scss" scoped></style>
