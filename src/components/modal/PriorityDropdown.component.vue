<script>
import { mapWritableState } from "pinia";
import useTodoStore from "../../stores/todo";
export default {
  name: "PriorityDropdown",
  computed: {
    ...mapWritableState(useTodoStore, ["priority_item", "selected"]),
  },
  methods: {
    selectPriorityHandler(input) {
      this.selected = input;
    },
  },
};
</script>

<template>
  <ul class="options">
    <li
      class="option"
      v-for="(priority, index) in priority_item"
      :key="index"
      @click.prevent="
        selectPriorityHandler({ title: `${priority.title}`, color: `${priority.color}` })
      "
    >
      <i :style="`color: ${priority.color}`" class="fa-solid fa-circle"></i>
      <span>{{ priority.title }}</span>
    </li>
  </ul>
</template>
<style lang="scss" scoped></style>
