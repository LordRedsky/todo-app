<script>
import { mapActions, mapWritableState } from "pinia";
import ModalComponent from "../components/modal/Modal.component.vue";
import useFormInputStore from "../stores/formInput";
import useTodoStore from "../stores/todo";
import useActivityStore from "../stores/activity";

export default {
  name: "Activity",
  data() {
    return {
      sort: false,
      isEmpty: false,
      editTitle: "",
      // isOpen: false,
    };
  },
  computed: {
    ...mapWritableState(useFormInputStore, ["isOpen"]),
    ...mapWritableState(useTodoStore, ["todo_lists"]),
    ...mapWritableState(useActivityStore, ["activities", "detailActivity"]),
  },
  methods: {
    ...mapActions(useActivityStore, ["updateTitleActivity"]),
    sortDropdownMenuHandler() {
      this.sort = !this.sort;
    },

    openFormInputHandler() {
      this.isOpen = !this.isOpen;
    },
  },
  components: { ModalComponent },
  watch: {},
  created() {
    this.activities = [];
    // this.editTitle = this.detailActivity.title;
  },
};
</script>

<template>
  <div class="container">
    <div class="detail-content">
      <div class="todo-header">
        <div class="new-activity">
          <RouterLink to="/"><i class="fa-solid fa-angle-left"></i></RouterLink>
          <span>{{ detailActivity.title }}</span>
          <input type="text" >
          <i class="fa-solid fa-pencil"></i>
        </div>

        <div class="dropdown">
          <div>
            <button class="btn-dropdown" v-if="isEmpty" @click="sortDropdownMenuHandler">
              <i class="fa-solid fa-right-left"></i>
            </button>

            <!-- SORT DROPDOWN -->
            <ul class="sort-dropdown" v-if="sort" @click="sortDropdownMenuHandler">
              <li class="sort-option">
                <img
                  class="img-sort"
                  src="../assets/icon/sort-icon/terbaru.svg"
                  alt="icon-terbaru"
                />
                <p>Terbaru</p>
              </li>
              <li class="sort-option">
                <img
                  class="img-sort"
                  src="../assets/icon/sort-icon/terlama.svg"
                  alt="icon-terlama"
                />
                <p>Terlama</p>
              </li>
              <li class="sort-option">
                <img
                  class="img-sort"
                  src="../assets/icon/sort-icon/A-Z.svg"
                  alt="icon-A-Z"
                />
                <p>A-Z</p>
              </li>
              <li class="sort-option">
                <img
                  class="img-sort"
                  src="../assets/icon/sort-icon/Z-A.svg"
                  alt="icon-Z-A"
                />
                <p>Z-A</p>
              </li>
              <li class="sort-option">
                <img
                  class="img-sort"
                  src="../assets/icon/sort-icon/belum-selesai.svg"
                  alt="icon-belum-selesai"
                />
                <p>Belum Selesai</p>
              </li>
            </ul>
          </div>
        </div>
        <button class="btn-add" @click.prevent="openFormInputHandler">
          <i class="fa-regular fa-plus"></i>
          Tambah
        </button>
      </div>

      <!-- FORM INPUT -->
      <ModalComponent v-if="isOpen" />

      <!-- IF LIST ITEM EMPTY -->
      <div class="empty-item" v-if="this.todo_lists.length === 0">
        <img src="../assets/img/todo-empty-state.svg" alt="image-todo-empty-state" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-activity {
  font-size: 35px;
  font-weight: 700;
}

.new-activity .fa-pencil {
  font-size: 30px;
  margin-left: 20px;
  color: #706969;
}
.sort-dropdown {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 205px;

  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.sort-dropdown .sort-option {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 205px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  left: -40px;
  padding: 2px 20px;
  gap: 10px;
}

.sort-dropdown .sort-option img {
  width: 20px;
  height: 20px;
}

.sort-dropdown .sort-option:hover {
  background: #a2d5ee;
}

.empty-item img {
  margin: 50px auto;
}
</style>
