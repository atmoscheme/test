<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Create Task
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Input task name please
        </v-card-title>
        <v-container>
          <v-text-field v-model="taskName"></v-text-field>
        </v-container>

        <v-divider></v-divider>
        <v-alert color="error" v-if="error">{{ error }}</v-alert>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="onCreate"> Create </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TaskModal",
  data() {
    return {
      dialog: false,
      error: "",
      taskName: "",
    };
  },
  methods: {
    ...mapActions("tasks", ["addToBoard"]),
    onCreate() {
      if (this.taskName) {
        this.dialog = false;
        this.addToBoard({ name: this.taskName, status: "done" });
        this.taskName = "";
      } else {
        this.error = "Please enter name";
      }
    },
  },
};
</script>
