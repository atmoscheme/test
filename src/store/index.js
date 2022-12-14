import Vue from "vue";
import Vuex from "vuex";

import tasks from "./tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    namespaced: true,
    tasks,
  },
});
