import actions from "./tasksActions";
import mutations from "./tasksMutations";
import state from "./tasksState";

export default {
  name: "tasks",
  namespaced: true,
  state,
  actions,
  mutations,
};
