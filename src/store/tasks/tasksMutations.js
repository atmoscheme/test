const taskBarLSKey = "taskBoard";
const defaultBoard = "Backlog";
const boardDataModel = [
  {
    name: defaultBoard,
    children: [],
  },
  {
    name: "In Progress",
    children: [],
  },
  {
    name: "Done",
    children: [],
  },
];

const mutations = {
  SET_TASK(state, payload) {
    const defaultKey = state.tasks.findIndex((g) => g.name === defaultBoard);
    state.tasks[defaultKey].children.push(payload);
    localStorage.setItem(taskBarLSKey, JSON.stringify(state.tasks));
  },
  SETUP_BOARD(state) {
    let data;
    if (!localStorage.getItem(taskBarLSKey)) {
      data = boardDataModel;
      localStorage.setItem(taskBarLSKey, JSON.stringify(data));
    } else {
      data = JSON.parse(localStorage.getItem(taskBarLSKey));
    }
    state.tasks = data;
  },
  UPDATE_BOARD(state, payload) {
    state.tasks = payload;
    localStorage.setItem(taskBarLSKey, JSON.stringify(state.tasks));
  },
};
export default mutations;
