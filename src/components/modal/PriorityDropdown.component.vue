<script>
export default {
  name: "PriorityDropdown",
};
</script>

<template>
  <ul class="options">
    <li class="option selected">
      <i style="color: #ed4c5c" class="fa-solid fa-circle"></i>
      <span>Very Hight</span>
    </li>
    <li class="option">
      <i style="color: #f8a541" class="fa-solid fa-circle"></i>
      <span>Hight</span>
    </li>
    <li class="option">
      <i style="color: #00a790" class="fa-solid fa-circle"></i>
      Medium
    </li>
    <li class="option">
      <i style="color: #428bc1" class="fa-solid fa-circle"></i>
      Low
    </li>
    <li class="option">
      <i style="color: #8942c1" class="fa-solid fa-circle"></i>
      Very Low
    </li>
  </ul>
</template>
<style lang="scss" scoped></style>
