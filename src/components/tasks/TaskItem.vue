<template>
  <v-card class="task">
    <v-card-title>{{ name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    name: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
.task {
  padding: 30px;
  margin: 30px;
}
</style>
