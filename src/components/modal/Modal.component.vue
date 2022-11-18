<script>
import { mapWritableState } from "pinia";
import useFormInputStore from "../../stores/formInput";
import PriorityDropdownComponent from "./PriorityDropdown.component.vue";
import useTodoStore from "../../stores/todo";

export default {
  name: "Modal",
  data() {
    return {
      isDropdown: false,
      todo_title: "",
    };
  },
  computed: {
    ...mapWritableState(useFormInputStore, ["isOpen"]),
    ...mapWritableState(useTodoStore, ["selected", "todo_lists"]),
  },
  methods: {
    closeFormInputHandler() {
      this.isOpen = !this.isOpen;
    },

    dropdownPriorityHandler() {
      this.isDropdown = !this.isDropdown;
    },

    submitTodoListHandler() {
      let id = 0;
      if (this.todo_lists.length > 0) {
        id = this.todo_lists[this.todo_lists.length - 1].id;
      }
      const data = {
        id: (id += 1),
        title: this.todo_title,
        priority: {
          title: this.selected.title,
          color: this.selected.color,
        },
        created_at: new Date(),
        updated_at: new Date(),
      };

      this.todo_lists.push(data);

      console.log(data);
      // console.log(this.todo_lists);
    },
  },
  components: { PriorityDropdownComponent },
};
</script>

<template>
  <div class="container">
    <div class="form-container" data-cy="form-container">
      <div class="form-header" data-cy="form-header">
        <h2>Tambah List Item</h2>
        <i class="fa-regular fa-plus" @click.prevent="closeFormInputHandler"></i>
      </div>
      <div class="form-body" data-cy="form-body">
        <div class="form-input-name">
          <span>nama list item</span>
          <input
            type="text"
            placeholder="Tambahkan nama list item"
            v-model="todo_title"
          />
        </div>
        <div class="form-input-priority">
          <span class="title">priority</span>
          <div class="select-menu" @click.prevent="dropdownPriorityHandler">
            <div class="select-btn">
              <i
                v-if="this.selected.color"
                :style="`color: ${this.selected.color}`"
                class="fa-solid fa-circle"
                style="margin-right: 10px; margin-left: 8px"
              ></i>
              <span style="margin-right: auto">{{ this.selected.title }}</span>
              <i class="fa-sharp fa-solid fa-chevron-down"></i>
            </div>

            <!-- Dropdown -->
            <PriorityDropdownComponent v-if="this.isDropdown" />
          </div>
        </div>
      </div>
      <div class="form-footer" data-cy="form-footer">
        <button
          type="submit"
          class="btn"
          data-cy="btn-add-activity-item"
          @click.prevent="submitTodoListHandler"
        >
          Simpan
        </button>
      </div>
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
  margin: 70px auto;
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
