<template>
  <div class="list-items" data-cy="list-items">
    <div class="item" data-cy="item">
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

<style scoped>
/* LIST ITEM */
.list-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
}

.list-items .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  width: 1000px;
  height: 50px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.list-items .item .fa-square-check {
  font-size: 20px;
  color: #16abf8;
}

.list-items .item .fa-square {
  font-size: 20px;
  color: #c7c7c7;
}

.list-items .item .fa-trash-can {
  color: #888888;
}

.detail-item {
  display: flex;
  margin-right: auto;

  width: 100%x;
  height: 52px;

  justify-content: center;
  align-items: center;
  gap: 12px;
}

.detail-item .check {
  text-decoration: line-through;
  color: #888888;
}

.detail-item .fa-circle {
  font-size: 10px;
}

.detail-item .fa-pencil {
  color: #c4c4c4;
}
</style>
