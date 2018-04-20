import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {},
  actions: {},
  modules: {
    shows: {
      namespaced:true,
      state: { 
        data: {},
      },
      getters: {
        byId() {

        },
        favorited() {
          
        }
      },
      actions: {
        refresh() {

        },
        favorite() {

        }
      },
      mutations: {
        update() {

        }
      }
    }
  }
});
