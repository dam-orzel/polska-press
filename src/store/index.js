import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    category: "",
    author: "",
    content: "",
    crossActive: false,
    popupActive: false,
  },
  getters: {
    title(state) {
      return state.title;
    },
    category(state) {
      return state.category;
    },
    author(state) {
      return state.author;
    },
    content(state) {
      return state.content;
    },
    cross(state) {
      return state.crossActive;
    },
    popup(state) {
      return state.popupActive;
    },
  },
  mutations: {
    title(state, payload) {
      state.title = payload;
    },
    category(state, payload) {
      state.category = payload;
    },
    author(state, payload) {
      state.author = payload;
    },
    content(state, payload) {
      state.content = payload;
    },
    crossActive(state, payload) {
      state.crossActive = payload;
    },
    popupHide(state, payload) {
      state.popupActive = payload;
    },
  },
  actions: {},
  modules: {},
});
