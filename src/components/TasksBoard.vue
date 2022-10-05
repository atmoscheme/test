<template>
  <v-container>
    <DragDrop
      :dropzones="items"
      dropzonesTitle="Tasks"
      :originalTitle="null"
      :originalData="[]"
      :enableSave="false"
      :enableCancel="false"
    >
      <template #dd-card="{ cardData }">
        <TaskItem :name="cardData.name" />
      </template>
    </DragDrop>

    <TaskModal></TaskModal>
  </v-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import TaskItem from "./tasks/TaskItem";
import TaskModal from "./tasks/TaskModal";
import DragDrop from "vue-drag-n-drop";

export default {
  name: "TaskBoard",
  components: { DragDrop, TaskItem, TaskModal },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = this.tasks;
  },
  watch: {
    items: {
      deep: true,
      handler() {
        this.UPDATE_BOARD(this.items);
      },
    },
  },
  computed: {
    ...mapState("tasks", ["tasks"]),
  },
  methods: {
    ...mapMutations("tasks", ["UPDATE_BOARD"]),
  },
};
</script>

<style lang="scss">
.vue-drag-n-drop {
  .smooth-dnd-container.horizontal,
  hr {
    display: none;
  }
  .draggs {
    display: flex;
    width: 100%;
  }
  .dd-title {
    margin: 30px;
  }
}
</style>
