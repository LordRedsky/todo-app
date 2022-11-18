<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <div class="header-background" data-cy="header-background">
      <div class="header-title" data-cy="header-title">TO DO LIST APP</div>
    </div>
  </header>
</template>

<style scoped>
header .header-background {
  background-color: #16abf8;
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  padding: 10px 220px;
  font-weight: 700;
  color: #ffffff;
  font-size: 24px;
}
</style>
