import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vuex from "vuex";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  vuex,
  render: (h) => h(App),
}).$mount("#app");
