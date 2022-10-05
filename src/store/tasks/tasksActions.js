const actions = {
  async addToBoard({ commit, state }, payload) {
    if (payload.name) {
      console.log(state.tasks.map((g) => g.children));

      const ids = state.tasks
        .map((g) => (g.children.length ? g.children.map((i) => i.id) : false))
        .flat();

      commit("SET_TASK", {
        id: ids.length ? Math.max(...ids) + 1 : 0,
        name: payload.name,
      });
    }
  },
};

export default actions;
