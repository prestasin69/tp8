import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/app.css";

Vue.use(Vuex);

Vue.config.productionTip = false;

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});

Vue.filter("truncate", (value, truncate) => {
  if (truncate > 0) {
    return value.substr(0, truncate) + "...";
  }
  return value;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
